import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

export interface DocumentField {
  label: string;
  value: string;
}

export interface DocumentSpec {
  heading: string;
  subheading?: string;
  fields: DocumentField[];
}

interface DocumentPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  documents: DocumentSpec[];
}

export function DocumentPreviewDialog({ open, onOpenChange, title, documents }: DocumentPreviewDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[640px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between gap-4">
            <DialogTitle>{title}</DialogTitle>
            <button
              onClick={() => window.print()}
              className="px-4 py-1.5 rounded-full text-[13px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] transition-colors shrink-0"
            >
              Print
            </button>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {documents.map((doc, i) => (
            <div key={i} className="border border-[#e5e7eb] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-[#0d7a6e] text-white flex items-center justify-center text-[10px] font-semibold shrink-0">
                  aSa
                </div>
                <h3 className="text-[15px] font-medium text-[#1f2937]">{doc.heading}</h3>
              </div>
              {doc.subheading && <p className="text-[12px] text-[#6b7280] mb-3">{doc.subheading}</p>}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-3">
                {doc.fields.map((f) => (
                  <div key={f.label}>
                    <p className="text-[11px] text-[#9ca3af] uppercase tracking-wide">{f.label}</p>
                    <p className="text-[13px] text-[#1a1a1a]">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
