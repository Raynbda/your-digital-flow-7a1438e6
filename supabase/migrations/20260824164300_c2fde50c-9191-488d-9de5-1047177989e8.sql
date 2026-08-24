GRANT INSERT ON public.diagnostic_submissions TO anon;
GRANT INSERT ON public.diagnostic_submissions TO authenticated;
CREATE POLICY "Anyone can submit a diagnostic" ON public.diagnostic_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);