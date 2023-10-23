export interface SweetAlertMessage {
  title: string
  type: 'success' | 'warning' | 'error' | 'question',
  text: string | undefined | null,
  successButtonText: string
}
