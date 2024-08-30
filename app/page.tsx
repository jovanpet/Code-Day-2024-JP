import CallAPI from './api/user/GetUserTaskSheet';
import Navbar from './/components/Navbar';
import React from 'react';

export default function Home() {
    return (

        <main>
            <Navbar/>            
            <CallAPI />


            <div className="min-h-screen bg-base-100 flex flex-col justify-center items-center">
                <div className="text-center max-w-2xl p-6">
                    <h1 className="text-5xl font-bold mb-6">Welcome to FamilyChecklist</h1>
                    <p className="text-lg mb-8">
                Managing tasks and routines for your family just got easier. FamilyChecklist is a powerful yet simple tool designed for parents and kids to track progress and stay organized together.
                    </p>
                    <p className="text-lg mb-8">
                With our user-friendly platform, both parents and kids can access their own dedicated interfaces, making it easy to assign tasks, check off accomplishments, and see progress over time.
                    </p>
                    <p className="text-lg mb-8">
                    Whether you&apos;re teaching your kids responsibility or keeping your household running smoothly, FamilyChecklist is here to support your journey. Plus, with secure authentication, you can rest assured that your family&apos;s data is protected every step of the way.
                    </p>
                    <button className="btn btn-primary btn-lg">Get Started</button>
                </div>
            </div>
        </main>
    );
}