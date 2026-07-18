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
import { AlertsPage } from './pages/AlertsPage';
import { FABRICATORS } from './data/fabricators';
import { THREADS, addReply, type MessageThread } from './data/messages';
import { unreadAlertCount, addAlert, markAlertRead, type Alert } from './data/alerts';
import { findJob, matchesJob } from './data/filters';

type Section = 'dashboard' | SectionPage | 'account' | 'jobs' | 'job-detail' | 'requested-delivery-date' | 'alerts';

export default function App() {
  const [fabricatorId, setFabricatorId] = useState<string | null>(null);
  const [section, setSection] = useState<Section>('dashboard');
  const [selectedJob, setSelectedJob] = useState('All Jobs');
  const [invoicesOpenOnly, setInvoicesOpenOnly] = useState(false);
  const [jobDetailName, setJobDetailName] = useState<string | null>(null);
  const [deliveryDateOrder, setDeliveryDateOrder] = useState<(typeof ORDERS)[number] | null>(null);
  const [deliveryRequests, setDeliveryRequests] = useState<Record<string, { requestedDate: string }>>({});
  const [, setRefreshTick] = useState(0);
  const [focusOrderId, setFocusOrderId] = useState<string | undefined>(undefined);
  const [focusInvoiceId, setFocusInvoiceId] = useState<string | undefined>(undefined);
  const [focusShipmentId, setFocusShipmentId] = useState<string | undefined>(undefined);
  const [focusThreadId, setFocusThreadId] = useState<string | undefined>(undefined);

  const fabricator = FABRICATORS.find((f) => f.id === fabricatorId);

  const handleSelectFabricator = (id: string) => {
    setFabricatorId(id);
    setSelectedJob('All Jobs');
    setSection('dashboard');
  };

  const handleSwitchFabricator = () => {
    setFabricatorId(null);
  };

  const clearFocus = () => {
    setFocusOrderId(undefined);
    setFocusInvoiceId(undefined);
    setFocusShipmentId(undefined);
    setFocusThreadId(undefined);
  };

  const handleNavigateSection = (page: SectionPage) => {
    setInvoicesOpenOnly(false);
    clearFocus();
    setSection(page);
  };

  const handleOpenInvoicesFromDashboard = () => {
    setInvoicesOpenOnly(true);
    clearFocus();
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

  const handleSubmitDeliveryDateRequest = (order: (typeof ORDERS)[number], requestedDate: string) => {
    setDeliveryRequests((prev) => ({ ...prev, [order.id]: { requestedDate } }));
    addAlert({
      kind: 'delivery-date-requested',
      jobName: order.jobName,
      title: 'Delivery date request submitted',
      body: `Requested delivery date of ${requestedDate} was submitted for order ${order.orderNo}.`,
      timestamp: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      sourceRef: { type: 'order', id: order.id },
    });
  };

  const handleSendReply = (thread: MessageThread, body: string) => {
    addReply(thread.id, body);
    addAlert({
      kind: 'message-reply',
      jobName: thread.jobName,
      title: 'Reply sent',
      body: `You replied to "${thread.subject}".`,
      timestamp: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      sourceRef: { type: 'thread', id: thread.id },
    });
    setRefreshTick((n) => n + 1);
  };

  const handleOpenAlert = (alert: Alert) => {
    markAlertRead(alert.id);
    if (alert.sourceRef) {
      clearFocus();
      const { type, id } = alert.sourceRef;
      if (type === 'order') {
        setFocusOrderId(id);
        setSection('orders');
      } else if (type === 'invoice') {
        setFocusInvoiceId(id);
        setSection('invoices');
      } else if (type === 'shipment') {
        setFocusShipmentId(id);
        setSection('shipments');
      } else if (type === 'thread') {
        setFocusThreadId(id);
        setSection('messages');
      }
    }
    setRefreshTick((n) => n + 1);
  };

  if (!fabricator) {
    return <FabricatorSelectionScreen onSelectFabricator={handleSelectFabricator} />;
  }

  const unreadMessageCount = THREADS.filter(
    (t) => t.unread && findJob(t.jobName)?.fabricatorId === fabricator.id && matchesJob(t.jobName, selectedJob)
  ).length;

  const unreadAlerts = unreadAlertCount((jobName) => findJob(jobName)?.fabricatorId, fabricator.id, selectedJob);

  return (
    <div className="flex flex-col min-h-screen w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      <TopNav
        fabricatorName={fabricator.name}
        onHome={() => setSection('dashboard')}
        onSwitchFabricator={handleSwitchFabricator}
        onOpenAccount={() => setSection('account')}
        onOpenAlerts={() => setSection('alerts')}
        unreadAlertCount={unreadAlerts}
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
            deliveryRequests={deliveryRequests}
            focusOrderId={focusOrderId}
          />
        )}
        {section === 'requested-delivery-date' && deliveryDateOrder && (
          <RequestedDeliveryDatePage
            order={deliveryDateOrder}
            existingRequest={deliveryRequests[deliveryDateOrder.id]}
            onSubmit={(requestedDate) => handleSubmitDeliveryDateRequest(deliveryDateOrder, requestedDate)}
            onBack={() => setSection('orders')}
          />
        )}
        {section === 'shipments' && (
          <ShipmentsPage
            fabricatorId={fabricator.id}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            focusShipmentId={focusShipmentId}
          />
        )}
        {section === 'invoices' && (
          <InvoicesPage
            fabricatorId={fabricator.id}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            openOnly={invoicesOpenOnly}
            focusInvoiceId={focusInvoiceId}
          />
        )}
        {section === 'messages' && (
          <MessagesPage
            fabricatorId={fabricator.id}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            onSendReply={handleSendReply}
            focusThreadId={focusThreadId}
          />
        )}
        {section === 'account' && <AccountPage />}
        {section === 'alerts' && (
          <AlertsPage
            fabricatorId={fabricator.id}
            selectedJob={selectedJob}
            onJobChange={setSelectedJob}
            onOpenAlert={handleOpenAlert}
          />
        )}
      </div>
    </div>
  );
}
