import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { profile } from '../data/portfolio'

const schema=z.object({name:z.string().trim().min(2,'Please enter your name.'),email:z.string().email('Enter a valid email address.'),subject:z.string().trim().min(3,'Tell me what this is about.'),message:z.string().trim().min(20,'Please share at least 20 characters.')})
const fields=[['name','Name','Your name','name'],['email','Email','you@company.com','email'],['subject','Subject','A backend project','off']]
// The site is fully static, so there is no endpoint to post to: the form validates
// here and then hands the composed message to the visitor's own mail client.
const mailtoHref=({name,email,subject,message})=>`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\n—\n${name}\n${email}`)}`
export default function ContactForm(){ const [status,setStatus]=useState('idle'); const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:zodResolver(schema)}); const submit=data=>{window.location.href=mailtoHref(data);setStatus('sent');reset()}
return <form onSubmit={handleSubmit(submit)} noValidate className="form">{fields.map(([name,label,placeholder,autoComplete])=><label key={name} className="form__field"><span className="form__label">{label}</span><input {...register(name)} type={name==='email'?'email':'text'} autoComplete={autoComplete} placeholder={placeholder} className="form__input" aria-invalid={!!errors[name]}/><span className="form__error">{errors[name]&&<span role="alert">{errors[name].message}</span>}</span></label>)}<label className="form__field"><span className="form__label">Message</span><textarea {...register('message')} rows="5" placeholder="What are you building, and where could I help?" className="form__input" aria-invalid={!!errors.message}/><span className="form__error">{errors.message&&<span role="alert">{errors.message.message}</span>}</span></label><div><button type="submit" className="btn" data-cursor="send">Send enquiry</button></div><div className="form__status" aria-live="polite">{status==='sent'&&<p><CheckCircle2 size={16}/> <span>Your email client should be opening with the message ready to send. If it didn’t, write to <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.</span></p>}</div></form> }
