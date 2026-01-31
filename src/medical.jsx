import React, { useState } from 'react';
import { FileDown } from 'lucide-react';

export default function SickLeaveCertificateGenerator() {
  const [formData, setFormData] = useState({
    issueDate: '2026-01-29',
    documentNo: 'MC13112024ME012721',
    universityName: 'Vellore Institute of Technology, Andhra Pradesh',
    patientName: 'Mr. Karan M.L',
    careOf: 'Mr. Moorthy R',
    age: '22',
    gender: 'male',
    address: 'Kannamapuram,Arachalur,Erode District,Tamil Nadu - 638101',
    diagnosis: 'viral fever',
    restDays: '5',
    restStartDate: '2026-01-27',
    doctorName: 'Dr. Senthil kumar ',
    doctorQualification: 'M.B.B.S. GENERAL MEDICINE',
    doctorRegNo: 'REGD. NO. G-70973',
    doctorEmail: 'sethilkumar@gmail.com',
    doctorPhone: '97904-06599',
    headerTagline: 'CARE COMES FIRST',
    certificateTitle: 'MEDICAL CERTIFICATE',
    mainText1: 'This is to certify that I,',
    mainText2: ', have examined',
    mainText3: ', C/O',
    mainText4: ', aged',
    mainText5: 'years, gender:',
    mainText6: ', residing at',
    mainText7: '',
    mainText8: 'After thorough examination, I have diagnosed the patient with',
    mainText9: 'Based on the diagnosis, I recommend bed rest for',
    mainText10: 'days starting from',
    mainText11: 'for complete recovery and restoration of good health.',
    patientSignatureLabel: 'Patient\'s Signature',
    patientNameLabel: 'Patient\'s Name',
    doctorNameLabel: 'Doctor\'s Name',
    issueDateLabel: 'ISSUE DATE:',
    documentNoLabel: 'DOCUMENT NO.:',
    toLabel: 'To,',
    footerText: 'This medical document is not valid without your signature. The details maintained in this medical document are as per the symptoms mentioned by you during the consultation. Kindly note that there is no reimbursement that can be requested for not receiving any treatment by our doctor, it is the duty of the patient to take full responsibility for the information shared. The medical document is only valid for the basis mentioned by the patient. This medical document can only be used for one-time submission and this is not for refilling purpose etc. If you have any concerns about the usage of medical document you can let us know.'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const printCertificate = () => {
    const printWindow = window.open('', '_blank');
    const certificateHTML = document.getElementById('certificate').innerHTML;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Sick Leave Certificate</title>
          <style>
            @page { 
              size: A4 portrait; 
              margin: 0; 
            }
            * { 
              margin: 0; 
              padding: 0; 
              box-sizing: border-box; 
            }
            html, body { 
              width: 210mm; 
              height: 297mm; 
              margin: 0; 
              padding: 0; 
              overflow: hidden;
            }
            body { 
              font-family: 'Times New Roman', Times, serif; 
              background: #f5f1e8; 
            }
            #certificate {
              width: 210mm;
              height: 297mm;
              min-height: 297mm;
              max-height: 297mm;
              display: flex;
              flex-direction: column;
              page-break-inside: avoid;
              page-break-after: avoid;
              page-break-before: avoid;
              box-sizing: border-box;
            }
            @media print {
              html, body {
                width: 210mm;
                height: 297mm;
                overflow: hidden;
              }
              body { 
                -webkit-print-color-adjust: exact; 
                print-color-adjust: exact; 
              }
              #certificate {
                page-break-inside: avoid !important;
              }
            }
          </style>
        </head>
        <body><div id="certificate">${certificateHTML}</div></body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
  };

  // Simple Medical Cross Logo
  const MedicalLogo = () => (
    <svg width="45" height="45" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
      {/* Medical Cross */}
      <rect x="40" y="10" width="20" height="80" rx="2" fill="white"/>
      <rect x="10" y="40" width="80" height="20" rx="2" fill="white"/>
      {/* Optional circle background */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="3"/>
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f0f4f8, #e2e8f0)', padding: '20px' }}>
      {/* Form Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '30px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#1e3a5f' }}>Sick Leave Certificate Generator</h1>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>Fill in the details below to generate a professional sick leave certificate</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            { label: 'Issue Date', name: 'issueDate', type: 'date' },
            { label: 'Document No.', name: 'documentNo', type: 'text' },
            { label: 'To (University/Organization)', name: 'universityName', type: 'text', span: 2 },
            { label: 'Patient Name', name: 'patientName', type: 'text' },
            { label: 'Care of (C/O)', name: 'careOf', type: 'text' },
            { label: 'Age', name: 'age', type: 'number' },
            { label: 'Gender', name: 'gender', type: 'select', options: ['male', 'female', 'other'] },
            { label: 'Address', name: 'address', type: 'text', span: 2 },
            { label: 'Diagnosis', name: 'diagnosis', type: 'text' },
            { label: 'Rest Days Required', name: 'restDays', type: 'number' },
            { label: 'Rest Start Date', name: 'restStartDate', type: 'date' },
            { label: 'Doctor Name', name: 'doctorName', type: 'text' },
            { label: 'Doctor Qualification', name: 'doctorQualification', type: 'text' },
            { label: 'Registration No.', name: 'doctorRegNo', type: 'text' },
            { label: 'Doctor Email', name: 'doctorEmail', type: 'email' },
            { label: 'Doctor Phone', name: 'doctorPhone', type: 'tel' }
          ].map(field => (
            <div key={field.name} style={field.span === 2 ? { gridColumn: 'span 2' } : {}}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px', color: '#334155' }}>{field.label}</label>
              {field.type === 'select' ? (
                <select name={field.name} value={formData[field.name]} onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px' }}>
                  {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              ) : (
                <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px' }}/>
              )}
            </div>
          ))}
        </div>

        {/* Advanced Settings */}
        <details style={{ marginTop: '30px', padding: '20px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <summary style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a5f', cursor: 'pointer' }}>
            ⚙️ Advanced Settings - Edit All Certificate Text
          </summary>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
            {[
              { label: 'Header Tagline', name: 'headerTagline' },
              { label: 'Certificate Title', name: 'certificateTitle' },
              { label: 'Issue Date Label', name: 'issueDateLabel' },
              { label: 'Document No. Label', name: 'documentNoLabel' },
              { label: '"To," Label', name: 'toLabel' },
              { label: 'Patient Signature Label', name: 'patientSignatureLabel' },
              { label: 'Patient Name Label', name: 'patientNameLabel' },
              { label: 'Doctor Name Label', name: 'doctorNameLabel' }
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px', color: '#334155' }}>{field.label}</label>
                <input type="text" name={field.name} value={formData[field.name]} onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px' }}/>
              </div>
            ))}
            
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px', color: '#334155' }}>Footer Disclaimer Text</label>
              <textarea name="footerText" value={formData.footerText} onChange={handleChange} rows="4"
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', resize: 'vertical' }}/>
            </div>
            
            <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#334155' }}>Main Certificate Text (Edit sentence parts)</h4>
            </div>
            
            {[
              { label: 'Text before doctor name', name: 'mainText1', placeholder: 'This is to certify that I,', span: 2 },
              { label: 'Text between doctor and patient name', name: 'mainText2', placeholder: ', after examining', span: 2 },
              { label: 'Before C/O', name: 'mainText3' },
              { label: 'Before age', name: 'mainText4' },
              { label: 'Between age and gender', name: 'mainText5' },
              { label: 'Before address', name: 'mainText6' },
              { label: 'After address', name: 'mainText7' },
              { label: 'Before diagnosis', name: 'mainText8' },
              { label: 'Start of bed rest sentence', name: 'mainText9', span: 2 },
              { label: 'Between rest days and date', name: 'mainText10' },
              { label: 'End of bed rest sentence', name: 'mainText11' }
            ].map(field => (
              <div key={field.name} style={field.span === 2 ? { gridColumn: 'span 2' } : {}}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', marginBottom: '5px', color: '#475569' }}>{field.label}</label>
                <input type="text" name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder || ''}
                  style={{ width: '100%', padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13px' }}/>
              </div>
            ))}
          </div>
        </details>
        
        <button onClick={printCertificate}
          style={{
            marginTop: '30px', width: '100%', padding: '12px',
            background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)',
            color: 'white', border: 'none', borderRadius: '8px',
            fontSize: '16px', fontWeight: '600', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FileDown size={20} />
          Generate & Print Certificate
        </button>
      </div>

      {/* Certificate Preview */}
      <div style={{ maxWidth: '210mm', margin: '0 auto' }}>
        <div id="certificate" style={{ 
          width: '210mm', 
          height: '297mm', 
          minHeight: '297mm',
          maxHeight: '297mm',
          background: '#f5f1e8', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
          fontFamily: 'Times New Roman, serif', 
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          boxSizing: 'border-box'
        }}>
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)',
            color: 'white', padding: '20px 40px', display: 'flex',
            justifyContent: 'space-between', alignItems: 'center',
            borderBottom: '3px solid #d4af37'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MedicalLogo />
            </div>
            
            <div style={{ textAlign: 'right', lineHeight: '1.4' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                {formData.doctorName.toUpperCase()}
              </div>
              <div style={{ fontSize: '10px', marginTop: '4px' }}>{formData.doctorQualification}</div>
              <div style={{ fontSize: '10px' }}>{formData.doctorRegNo}</div>
              <div style={{ fontSize: '9px', marginTop: '5px' }}>
                {formData.doctorEmail} | {formData.doctorPhone}
              </div>
            </div>
          </div>

          {/* Title Bar */}
          <div style={{
            background: '#f5f1e8', borderTop: '1.5px solid #1e3a5f',
            borderBottom: '1.5px solid #1e3a5f', padding: '10px 40px', textAlign: 'center'
          }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e3a5f', letterSpacing: '4px' }}>
              {formData.certificateTitle}
            </div>
          </div>

          {/* Meta Info */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', padding: '15px 40px',
            fontSize: '11px', background: '#f5f1e8', borderBottom: '0.5px solid #d0d0d0'
          }}>
            <div><strong>{formData.issueDateLabel}</strong> {formatDate(formData.issueDate)}</div>
            <div><strong>{formData.documentNoLabel}</strong> {formData.documentNo}</div>
          </div>

          {/* Content */}
          <div style={{ padding: '25px 40px 20px 40px', lineHeight: '1.9', fontSize: '12px', background: '#f5f1e8', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '4px' }}><strong>{formData.toLabel}</strong></div>
              <div>{formData.universityName}</div>
            </div>

            <div style={{ textAlign: 'justify', marginBottom: '18px', lineHeight: '1.9' }}>
              This is to certify that I, <strong>{formData.doctorName}</strong>, have examined <strong>{formData.patientName}</strong>, S/o {formData.careOf}, aged <strong>{formData.age}</strong> years, on {formatDate(formData.issueDate)}.
            </div>

            <div style={{ textAlign: 'justify', marginBottom: '18px', lineHeight: '1.9' }}>
              On clinical examination, {formData.gender === 'male' ? 'he' : formData.gender === 'female' ? 'she' : 'they'} was diagnosed with <strong>{formData.diagnosis}</strong> and was found to be medically unfit to carry out regular academic and official activities.
            </div>

            <div style={{ textAlign: 'justify', marginBottom: '18px', lineHeight: '1.9' }}>
              {formData.gender === 'male' ? 'He' : formData.gender === 'female' ? 'She' : 'They'} was advised complete bed rest and appropriate medical care for recovery.
            </div>

            <div style={{ textAlign: 'justify', marginBottom: '18px', lineHeight: '1.9' }}>
              {formData.gender === 'male' ? 'He' : formData.gender === 'female' ? 'She' : 'They'} was unfit to attend college/official activities from <strong>{formatDate(formData.restStartDate)}</strong> to <strong>{formatDate(new Date(new Date(formData.restStartDate).getTime() + (formData.restDays - 1) * 24 * 60 * 60 * 1000))}</strong>.
            </div>

            <div style={{ textAlign: 'justify', lineHeight: '1.9' }}>
              This certificate is issued based on clinical findings and is given for official and academic purposes.
            </div>
          </div>

          {/* Flexible Spacer to push signature section down */}
          <div style={{ flex: '1 1 auto', background: '#f5f1e8' }}></div>

          {/* Signature Section */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '10px 40px 25px 40px', background: '#f5f1e8',
            flexShrink: 0
          }}>
            <div style={{ fontSize: '11px' }}>
              <div style={{ marginBottom: '6px', fontWeight: 'bold' }}>
                {formData.patientSignatureLabel}
              </div>
              <div style={{ marginTop: '30px', fontWeight: 'bold' }}>{formData.patientName.split(' ').slice(1).join(' ')}</div>
              <div style={{ fontSize: '10px', marginTop: '2px', color: '#555' }}>{formData.patientNameLabel}</div>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', marginTop: '38px', fontWeight: 'bold' }}>{formData.doctorName}</div>
              <div style={{ fontSize: '10px', marginTop: '2px', color: '#555' }}>{formData.doctorNameLabel}</div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            background: '#1e3a5f', padding: '15px 40px', fontSize: '7.5px',
            lineHeight: '1.5', color: '#e0e0e0', textAlign: 'justify', borderTop: '3px solid #1e3a5f',
            flexShrink: 0
          }}>
            {formData.footerText}
          </div>
        </div>
      </div>
    </div>
  );
}