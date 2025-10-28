---
layout: single
title: "Conquering the OSCP: my playbook"
date: 2025-03-03
excerpt: Notes, mindset, labs → exam
tags: [oscp, study, labs]
---

# Conquering the OSCP: Self-Study Tips and Exam Tricks

{% include figure
   image_path="/assets/images/posts/oscp/cert.png"
   caption="https://credentials.offsec.com/827f00a4-5965-419c-8246-a04f65a2e3ee#acc.DkanlJXw"
   class="align-center" %}

**What is the Offensive Security Certified Professional (OSCP) Certification?**

The Offensive Security Certified Professional certification, or OSCP, is an ethical hacking certification that demonstrates proficiency in penetration testing using Kali Linux tools. This test can be undeniably grueling if you are ill-prepared, with nearly 24 hours of hands-on keyboard hacking followed by another 24 hours of documentation/report writing.  

The exam itself simulates a live network consisting of three independent machines and an Active Directory set containing two Clients and one Domain Controller. At least 60 points total are required for a passing score.

**The points are broken down as follows:**

Three Independent Targets (60 points total)
- 20 points for full exploitation per machine (10 points for low privilege, 10 points for privilege escalation)
 Active Directory Set of Two Clients and One Domain Controller (40 points total)  

- 40 points for full Domain Admin (partial credits permitted for individual machines at 10 points each) 

Once you’ve completed the first part of the exam, you have exactly 24 hours to submit your documentation. Although you are allotted the full 48 hours from the start of your exam, it’s best to manage your time efficiently so you can avoid a last-minute rush.  

To help you better prepare and increase your chances of success, here are my tips and valuable tricks so you can feel confident going into your exam.  
# The Self-Study Guide

Before attempting the OSCP, you should have experience working with Windows and Linux systems, an understanding of TCP/IP networking, and familiarity with network and web application vulnerabilities. Additionally, knowledge of Bash, PowerShell, and Python scripting is highly beneficial.  

If you have little to no penetration testing knowledge, jumping into PWK’s course without preparation might not be the best idea. Instead, start with something more affordable and foundational. I recommend these helpful resources:

- Hack The Box’s Penetration Tester Path
  
- YouTube videos (IppSec and S1REN are great options)
  
- Exploiting boxes on platforms like TryHackMe, Virtual Hacking Labs, or OffSec’s Proving Grounds 

The goal here is to build a foundation to reach proficiency in penetration testing methodologies by mastering tools such as, but not limited to, Nmap, Metasploit, and Burp Suite. This foundation should begin to cultivate an adversarial mindset. A successful penetration tester possesses a desire to continuously learn, strong critical thinking skills, and the ability to see the bigger picture.  

**Foundational Topics**

Below is a list of the major topics within the OSCP, which you can use as a checklist while studying your foundation:  

- Enumeration and Information Gathering
- Port Scanning 
- Service Enumeration
- Locating Hidden Files/Directories
- Web Application Attacks
- Reconnaissance
- Exploit Research
- Injection Attacks
- Obtaining Shell Access 
- Network Service Attacks
- Exploit Research
- Obtaining Shell Access 
- Active Directory
- Authentication Attacks
- Lateral Movement
- Password Attacks and Hash Cracking
- File Transfer Techniques
- Lateral Movement
- Pivoting and Port redirection
- Privilege escalation techniques
- Windows
- Linux
- Note Taking 

**The Importance of Effective Notetaking**

Given the vast list of OSCP topics to study, it’s important to instill the notion that notes are critical to your success. A significantly important tip is to choose the right note-taking tool for you.  I personally used Obsidian, but other helpful notetaking tools include:  

- CherryTree 
- Microsoft OneNote
- GitHub

It’s important to research your options and choose what works best for you. Identifying and adopting the right notetaking tool is essential for success as you will refer to your notes consistently throughout your preparation and during the exam as well.  

Below is a snapshot into Obsidian, a helpful Markdown text editor: 

![Pivot note](/assets/images/posts/oscp/obsidian.png)

**Create Your Study Plan**  

Once you’ve completed the foundation, it is imperative to proactively create a study plan before undergoing PEN-200. Create a personalized study plan that specifically addresses your weaknesses, allocates your time to hands-on-keyboard practice, and works through the PEN-200 course. Work to identify your weak areas based on boxes you’ve failed while practicing. Rinse, repeat, and hone your skills. This is imperative to success.  

Next, you’ll need to purchase the OffSec’s PEN-200 course and exam bundle.

A word of caution: Note that as of November 1st, 2024, OffSec made changes to the OSCP that removed the bonus points for completion of the labs, as well as a change to the Active Directory portion. More specifically, test-takers start from a position of assumed compromise within the Active Directory network instead of needing to compromise the initial foothold machine.   

For my study plan, I divided the curriculum into smaller sections and assigned specific time for each topic based on my strengths and weaknesses. For example, I spent notably more time working through the Active Directory portion of the curriculum in comparison to the Web Application portion. Prioritize grasping the core concepts, tools, and techniques. Enhance your learning with online resources, books, practice labs, and video tutorials. Continuously assess your progress and modify your study plan as needed. 

**Join the OffSec Community**

Next, be sure to join OffSec’s official Discord server. It’s a vibrant space where you can collaborate with others working on labs and challenges. Student mentors are available to guide you if you get stuck. This was an invaluable resource for me as I was able to get 24/7 support from others also working through the course.  

# The Study Approach for PEN-200

You’ll see that the PEN-200 covers each of the major topics I outlined earlier: 

Vulnerability Scanning
Web Application Attacks
Client-side Attacks
Password Attacks
Windows Privilege Escalation
Linux Privilege Escalation
Active Directory
Lateral Movement 

... And this is just a fraction of what the course offers. Like any tool, its value ultimately depends on how effectively you use and apply it. To fully realize the value of PEN-200, here are some helpful tips:   

**Take and Organize Thorough Notes** 

A notable regret of mine was not taking better notes when I initially began my studying. I’d suggest making cheat sheets and taking notes of your steps and commands of every machine you exploited– from initial enumeration to privilege escalation. Dedicate a portion of your notes to theory as well. If you struggle to grasp a concept from the course, use outside resources to supplement your knowledge.  

Be sure to organize your notes using Markdown features as well as placing relevant content into folders.

You want to be able to easily and seamlessly search through your notes during the exam, so you don’t waste valuable time. These notes should include all commands you learn during the course as well as all commands you learned working through outside resources.

**Practice Report Writing**

One of the most critical skills for OSCP preparation is mastering the art of writing thorough and detailed reports. This skill isn't just helpful for the exam–it’s also a valuable asset for your professional career.

# Tips for effective report writing:

_Write comprehensive walkthroughs._

Document every machine you exploit as if you were explaining it to someone with minimal context. Each walkthrough should be detailed enough for someone else to follow and replicate your steps without additional guidance. You can find great examples of walkthroughs on: Medium, HackTheBox, and OffSec’s Proving Grounds. 

_Capture key screenshots._

Visual evidence is crucial. Ensure you are following OffSec’s latest requirements for report writing – you don’t want to miss points due to a minor error such as a missing screenshot. Take screenshots at every significant step, such as: 
- Results of reconnaissance and enumeration
- Proof of exploitation
- Privilege escalation methods and outputs 

_Be structured and logical._

Organize your report in a logical, easy-to-follow manner. Walkthroughs act as a practical demonstration of theoretical concepts, bridging the gap between knowledge and real-world application. By following walkthroughs and writing them, students can improve their skills in enumeration, exploitation, and privilege escalation. Furthermore, walkthroughs emphasize structured problem-solving approaches, such as the Reconnaissance -> Exploitation -> Post-Exploitation process.

_Practice consistently._

Don’t wait until the exam to start honing this skill. Write reports for every machine or lab environment you work on, even if it’s just for practice. 
Establish Your Mindset
Just as important as your technical knowledge is your mindset. There's a reason why this is consistently harped on in communities oriented around the OSCP. Here’s some approaches that worked well for me: 

_Make it make sense._

I cannot stress this enough. It needs to make sense to you. Found an exploit online? Figure out what it is doing on the backend. Have you just been copying and pasting the commands from the textbook? Google what exactly that command is doing and what the command is looking for as well as why you are using it. For every machine you approach and gain a foothold into, you need to establish situational awareness. 
 
_Focus on what is actionable._

I never once thought to myself “try harder” during the exam. I know this is the mantra of the community, but it’s easy to get lost in rabbit holes, broken machines, and other hypotheticals. Don’t focus on those. Focus instead on what is actionable. If those exploits from GitHub, ExploitDB, MSF or elsewhere are all not working, it’s likely not actionable. If the unfamiliar service you’re working with should be operating one way according to HackTricks, but it’s not doing it on your machine, it’s probably not actionable. Take a step back and enumerate further.  
 
_KISS is real._

To be honest, I prefer “take your time, sweetie” over "keep it simple, stupid”. If you are like me, you start to rush when you get tired but rushing can lead to avoidable mistakes like forgetting to scan all ports. Take a step back, look at all of your notes paired with everything you have gathered during your enumeration and keep it simple. However, keeping it simple only works if you’re prepared and have proper knowledge, bringing me to my next point.  
 
_Outside materials are a necessity._

As you go through your journey, you will exhaust PEN-200. There are a couple of legends in the community who took it upon themselves to compile machines from various platforms that are similar to the OSCP machines: TJ Null and LainKusanagi. Do TJ Null’s list and LainKusanagi’s list in their entirety. This is mandatory in my opinion, especially if PEN-200 is the only material you have ever learned ethical hacking from.   

# Exam Tips: The First 24 Hours

If you do not typically write detailed notes while studying, then I’d recommend saving the notes and documentation for after actual exploitation of the machine. More specifically, don’t ruin the flow of your methodology by trying to overcompensate documentation. You should work to exploit the machine as you have in practice. Then, revert it and apply the same methods a second time but with extensive documentation.  

During my exam, when I was going through my machines a second time for documentation, a machine did not show the actionable item I saw in my first run through. Imagine if this happened during the initial enumeration phase. It would have been an entirely different story. If you’re skeptical and stuck, go ahead and revert.

Lastly, take a big break if you feel stuck. Everyone recommends this and it’s for good reason. Think about times when you have been studying for a long time and feel run-down, but you take a break to exercise or eat and come back with a refreshed mind as a result. The same principle applies to the exam. Do something that’ll temporarily exert your mental stress away from the exam.  

# Exam Tips: The Last 24 Hours

Be as detailed as possible. If for some reason you think a screenshot is not necessary, include it anyways. You do not want to fail the exam due to a lack of information in your report. I’d also recommend reading your documentation multiple times. Make sure all of your flags are visible in your screenshots as well as the IP addresses of the machines. 

# Trust Your OSCP Preparation and Take the Leap 

The question we all ask ourselves at some point, including myself is “Am I truly ready?” Understand that despite your best preparation efforts, you might never feel completely ready. That said, if you've dedicated yourself to preparation, put in the effort, and done your best to study and prepare, trust in your abilities. Believe in the journey you've taken to get to this point. Sometimes, readiness isn’t about certainty–it’s about courage. Take the leap and go for it! 
