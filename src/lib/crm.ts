/**
 * CRM Integration Utility
 * Handles lead submission to the CRM webhook.
 */

export interface CRMFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  brandId?: 'chromapages' | 'builtexpert' | 'servestrategy';
  sourceDetail?: string;
}

/**
 * Submits lead data to the CRM via a secure webhook.
 * @param formData The data captured from the website form.
 */
export const submitToCRM = async (formData: CRMFormData) => {
  try {
    const response = await fetch('https://your-crm-domain.com/api/webhooks/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ch_sec_7f8e9a2b1c3d4e5f6g7h8i9j0k1l2m3n'
      },
      body: JSON.stringify({
        brandId: formData.brandId || 'chromapages', // Default to chromapages per initial requirement
        fullName: formData.name,
        email: formData.email,
        companyName: formData.company || '',
        phone: formData.phone || '',
        sourceDetail: formData.sourceDetail || 'Marketing Landing Page'
      })
    });

    const result = await response.json();
    console.log('CRM Response:', result);
    return result;
  } catch (error) {
    console.error('CRM Submission Error:', error);
    // We don't throw error here to avoid breaking the main form submission flow
    return null;
  }
};
