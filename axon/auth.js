const SUPABASE_URL = 'https://zqvfnykxwlcozvawqgrn.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdmZueWt4d2xjb3p2YXdxZ3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NDkzNDQsImV4cCI6MjA4NTMyNTM0NH0.CevpF9vP4748mb2vFNsOp5Kq6u7Nfp_100bJcW7ogUQ'

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function login(){

const email = document.getElementById("email").value
const senha = document.getElementById("senha").value
const msg = document.getElementById("msg")

const { error } = await supabase.auth.signInWithPassword({
email: email,
password: senha
})

if(error){
msg.innerText = "Login inválido"
return
}

window.location.href = "index.html"

}

async function registro(){

const email = document.getElementById("email").value
const senha = document.getElementById("senha").value
const msg = document.getElementById("msg")

const { error } = await supabase.auth.signUp({
email: email,
password: senha
})

if(error){
msg.innerText = error.message
return
}

msg.innerText = "Conta criada! Agora faça login."

}