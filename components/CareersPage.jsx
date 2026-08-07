'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowRight,Briefcase,MapPin,Clock,Search,Sparkles,Users,BrainCircuit,HeartHandshake} from 'lucide-react';
import Navbar from './Navbar';import Footer from './Footer';import ContactModal from './ContactModal';

const jobs=[
 {title:'Senior AI Engineer',team:'AI Engineering',type:'Full time',mode:'On-site',location:'Lahore, Pakistan',featured:true,href:'/careers/senior-ai-engineer'},
 {title:'Frontend Engineer',team:'Product Engineering',type:'Full time',mode:'Remote',location:'Pakistan',href:'#talent'},
 {title:'Cloud Platform Lead',team:'Cloud & Data',type:'Full time',mode:'Hybrid',location:'Dubai, UAE',href:'#talent'},
 {title:'Senior Product Designer',team:'Experience Design',type:'Full time',mode:'Remote',location:'Global',href:'#talent'},
];
export default function CareersPage(){const[contact,setContact]=useState(false),[query,setQuery]=useState('');const shown=jobs.filter(j=>(j.title+j.team+j.location).toLowerCase().includes(query.toLowerCase()));return <main className="careers-page">
 <Navbar onOpenContact={()=>setContact(true)}/>
 <section className="careers-hero"><div><p><i/>CAREERS AT WRONYX</p><h1>Build intelligence.<br/><em>Shape what’s next.</em></h1><span>Join a high-trust team turning ambitious ideas into real products, platforms and AI systems used around the world.</span><a href="#openings">Explore open roles <ArrowRight/></a></div><aside><div className="career-orb"><BrainCircuit/></div><article><b>Human-first</b><span>Technology is our craft. People are our foundation.</span></article></aside></section>
 <section className="career-values"><article><Sparkles/><b>Meaningful work</b><span>Solve complex problems with visible business impact.</span></article><article><Users/><b>Senior collaboration</b><span>Learn alongside specialists who care about the details.</span></article><article><HeartHandshake/><b>Room to grow</b><span>Own outcomes, share ideas and develop your craft.</span></article></section>
 <section id="openings" className="openings"><header><div><p>OPEN POSITIONS / 01</p><h2>Find your next challenge.</h2></div><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search roles or locations" aria-label="Search open roles"/></label></header><div className="job-list">{shown.map(job=><Link key={job.title} href={job.href} className={job.featured?'featured':''}><div><small>{job.team}</small><h3>{job.title}</h3><p><span><MapPin/> {job.location}</span><span><Briefcase/> {job.mode}</span><span><Clock/> {job.type}</span></p></div>{job.featured&&<b>NOW HIRING</b>}<ArrowRight/></Link>)}</div>{!shown.length&&<p className="no-jobs">No matching roles. Try another search.</p>}</section>
 <section id="talent" className="talent-cta"><div><p>DON’T SEE YOUR ROLE?</p><h2>Great people rarely fit inside a dropdown.</h2><span>Send your profile to careers@wronyx.com and tell us what you want to build.</span></div><a href="mailto:careers@wronyx.com">Join our talent network <ArrowRight/></a></section>
 <Footer/><ContactModal isOpen={contact} onClose={()=>setContact(false)}/>
 </main>}
