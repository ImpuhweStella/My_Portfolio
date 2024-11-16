import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectSection() {
  const projects = [
    {
     
      title: 'UEP',
      description: 'UEP is a University Enrollment Platform that enables students to register, complete application forms, upload documents, check application status, and get notifications about their admission journey. ',
      link: 'https://github.com/ImpuhweStella/UEP'
    },
    {
     
      title: 'BankWise',
      description: ' This project aims to create a digital banking system where customers can create accounts remotely and manage them online.Deposit and withdraw money directly from their accounts.Apply for loans without visiting a physical branch, reducing the need for in-person interactions.',
      link: 'https://github.com/ImpuhweStella/Digital-banking-system'
    },
    {
    
      title: 'H&C System',
      description: 'H&C System is a system which will provide a way to register patients and manage their personal and medical information. It will also implement a scheduling system for booking appointments with healthcare providers. Additionally, it will enable healthcare providers to track and manage patient medical histories, including diagnoses, treatments, and medications. Patients will also be able to send feedback to the admin regarding their treatment by the doctors',
      link: 'https://github.com/ImpuhweStella/healthcare-management-system'
    }
  ];

  return (
    <section className="bg-[#0d0d1f] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-6">
          A Small Selection of Recent <span className="text-red-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
       
      </div>
    </section>
  );
}

export default ProjectSection;
