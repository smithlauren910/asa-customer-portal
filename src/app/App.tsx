import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { TopTabs, type SectionPage } from './components/TopTabs';
import { FabricatorSelectionScreen } from './pages/FabricatorSelectionScreen';
import { HomePage } from './pages/HomePage';
import { ShipmentsPage } from './pages/ShipmentsPage';
import { OrdersPage, type ORDERS } from './pages/OrdersPage';
import { RequestedDeliveryDatePage } from './pages/RequestedDeliveryDatePage';
import { InvoicesPage } from './pages/InvoicesPage';
import { MessagesPage } from './pages/MessagesPage';
import { JobsPage } from './pages/JobsPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { AccountPage } from './pages/AccountPage';
import { FABRICATORS } from './data/fabricators';
import { THREADS } from './data/messages';
import { findJob, matchesJob } from './data/filters';

type Section = 'dashboard' | SectionPage | 'account' | 'jobs' | 'job-detail' | 'requested-delivery-date';

export default function App() {
  const [fabricatorId, setFabricatorId] = useState<string | null>(null);
  const [section, setSection] = useState<Section>('dashboard');
  const [selectedJob, setSelectedJob] = useState('All Jobs');
  const [invoicesOpenOnly, setInvoicesOpenOnly] = useState(false);
  const [jobDetailName, setJobDetailName] = useState<string | null>(null);
  const [deliveryDateOrder, setDeliveryDateOrder] = useState<(typeof ORDERS)[number] | null>(null);

  const fabricator = FABRICATORS.find((f) => f.id === fabricatorId);

  const handleSelectFabricator = (id: string) => {
    setFabricatorId(id);
    setSelectedJob('All Jobs');
    setSection('dashboard');
  };

  const handleSwitchFabricator = () => {
    setFabricatorId(null);
  };

  const handleNavigateSection = (page: SectionPage) => {
    setInvoicesOpenOnly(false);
    setSection(page);
  };

  const handleOpenInvoicesFromDashboard = () => {
    setInvoicesOpenOnly(true);
    setSection('invoices');
  };

  const handleOpenJob = (jobName: string) => {
    setJobDetailName(jobName);
    setSection('job-detail');
  };

  const handleRequestDeliveryDate = (order: (typeof ORDERS)[number]) => {
    setDeliveryDateOrder(order);
    setSection('requested-delivery-date');
  };

  if (!fabricator) {
    return <FabricatorSelectionScreen onSelectFabricator={handleSelectFabricator} />;
  }

  const unreadMessageCount = THREADS.filter(
    (t) => t.unread && findJob(t.jobName)?.fabricatorId === fabricator.id && matchesJob(t.jobName, selectedJob)
  ).length;

  return (
    <div className="flex flex-col min-h-screen min-w-[1440px]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <TopNav
        fabricatorName={fabricator.name}
        onHome={() => setSection('dashboard')}
        onSwitchFabricator={handleSwitchFabricator}
        onOpenAccount={() => setSection('account')}
      />

      <TopTabs
        fabricator={fabricator}
        activePage={section}
        onNavigate={handleNavigateSection}
        unreadMessageCount={unreadMessageCount}
      />

      <div className="flex-1 flex min-h-0 overflow-hidden">
        {section === 'dashboard' && (
          <HomePage
            fabricator={fabricator}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            onOpenJobs={() => setSection('jobs')}
            onOpenOrders={() => handleNavigateSection('orders')}
            onOpenShipments={() => handleNavigateSection('shipments')}
            onOpenInvoices={handleOpenInvoicesFromDashboard}
            onOpenMessages={() => handleNavigateSection('messages')}
          />
        )}
        {section === 'jobs' && (
          <JobsPage
            fabricatorId={fabricator.id}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            onOpenJob={handleOpenJob}
          />
        )}
        {section === 'job-detail' && jobDetailName && (
          <JobDetailPage fabricator={fabricator} jobName={jobDetailName} onBack={() => setSection('jobs')} />
        )}
        {section === 'orders' && (
          <OrdersPage
            fabricatorId={fabricator.id}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            onRequestDeliveryDate={handleRequestDeliveryDate}
          />
        )}
        {section === 'requested-delivery-date' && deliveryDateOrder && (
          <RequestedDeliveryDatePage order={deliveryDateOrder} onBack={() => setSection('orders')} />
        )}
        {section === 'shipments' && (
          <ShipmentsPage fabricatorId={fabricator.id} selectedJob={selectedJob} onJobChange={setSelectedJob} />
        )}
        {section === 'invoices' && (
          <InvoicesPage
            fabricatorId={fabricator.id}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            openOnly={invoicesOpenOnly}
          />
        )}
        {section === 'messages' && (
          <MessagesPage fabricatorId={fabricator.id} selectedJob={selectedJob} onJobChange={setSelectedJob} />
        )}
        {section === 'account' && <AccountPage />}
      </div>
    </div>
  );
}
