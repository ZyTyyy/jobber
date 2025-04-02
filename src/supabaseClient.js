// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://didzgdccuvzosnujsdor.supabase.co'
const supabaseAnonKey = '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZHpnZGNjdXZ6b3NudWpzZG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MDQxNDIsImV4cCI6MjA1OTE4MDE0Mn0.p_uRLvoPLg7NioMYSQDqxcn2ABLwf2qqqTdQxgTB2DE>'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
