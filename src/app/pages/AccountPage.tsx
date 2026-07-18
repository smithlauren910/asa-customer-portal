import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';

export function AccountPage() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('JohnDoe@riverfront-construction.com');
  const [phone, setPhone] = useState('(412) 999-9999');
  const [jobTitle, setJobTitle] = useState('Project Manager');
  const [company, setCompany] = useState('Riverfront Construction LLC');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const InputField = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-[#374151]">{label}</label>
      <input
        className="bg-[#f9fafb] border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[16px] text-[#6b7280] outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e] transition-colors"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Account" showFilters={false} />

      <div className="p-4 sm:p-8 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Profile Card */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-6 flex-1 max-w-[720px] w-full">
          <h2 className="text-[20px] font-medium text-[#1f2937] mb-4">Profile</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <InputField label="First Name" value={firstName} onChange={setFirstName} />
            <InputField label="Last Name" value={lastName} onChange={setLastName} />
            <InputField label="Email" value={email} onChange={setEmail} />
            <InputField label="Phone" value={phone} onChange={setPhone} />
            <InputField label="Job Title" value={jobTitle} onChange={setJobTitle} />
            <InputField label="Company" value={company} onChange={setCompany} />
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-full text-[14px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] transition-colors"
            >
              Save Changes
            </button>
            {saved && (
              <span className="text-[13px] text-[#0d7a6e] font-medium">Changes saved</span>
            )}
          </div>
        </div>

        {/* Account Summary Card */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-6 w-full lg:w-[347px] lg:shrink-0">
          <h2 className="text-[20px] font-medium text-[#1f2937] mb-5">Account Summary</h2>

          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[12px] text-[#6b7280]">Customer ID</p>
              <p className="text-[16px] text-[#1f2937] mt-0.5">CUST-00412</p>
            </div>
            <div>
              <p className="text-[12px] text-[#6b7280]">Primary Fabricator</p>
              <p className="text-[16px] text-[#1f2937] mt-0.5">Pittsburgh Rebar Co.</p>
            </div>
            <div>
              <p className="text-[12px] text-[#6b7280]">Member Since</p>
              <p className="text-[16px] text-[#1f2937] mt-0.5">March 2023</p>
            </div>
            <div>
              <p className="text-[12px] text-[#6b7280]">Account Status</p>
              <span className="inline-flex items-center mt-0.5 px-2 py-0.5 rounded-sm text-[11px] font-medium text-white" style={{ backgroundColor: '#0d7a6e' }}>
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-6 max-w-[720px]">
        <h2 className="text-[16px] font-medium text-[#1f2937] mb-1">Password & Security</h2>
        <p className="text-[13px] text-[#6b7280] mb-4">Manage your password and two-factor authentication settings.</p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-full text-[14px] text-[#1a1a1a] border border-[#d0d0d0] hover:border-[#0d7a6e] hover:text-[#0d7a6e] transition-colors">
            Change Password
          </button>
          <button className="px-4 py-2 rounded-full text-[14px] text-[#1a1a1a] border border-[#d0d0d0] hover:border-[#0d7a6e] hover:text-[#0d7a6e] transition-colors">
            Set Up 2FA
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
