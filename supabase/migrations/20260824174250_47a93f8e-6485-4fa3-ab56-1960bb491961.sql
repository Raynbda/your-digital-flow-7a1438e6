INSERT INTO public.user_roles (user_id, role)
VALUES ('7528d2c2-4a81-48a9-a779-8a46d5d6332e', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;