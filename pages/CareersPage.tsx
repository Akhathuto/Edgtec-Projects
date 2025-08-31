import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, GraduationCap, Lightbulb, Filter, Search, ArrowRight, CheckCircle, Star, Target, TrendingUp, Shield } from 'lucide-react';
// Fix: Updated react-router-dom import to be compatible with v5.
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");

    const jobOpenings = [
        { id: 1, title: "Senior AI/ML Engineer", department: "Engineering", location: "San Francisco, CA", type: "Full-time", salary: "$180k - $250k", experience: "5+ years", featured: true },
        { id: 2, title: "Product Designer (UI/UX)", department: "Design", location: "Remote", type: "Full-time", salary: "$120k - $160k", experience: "3+ years", featured: true },
        { id: 3, title: "Frontend React Developer", department: "Engineering", location: "New York, NY", type: "Full-time", salary: "$130k - $170k", experience: "3+ years", featured: false },
        { id: 4, title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Contract", salary: "Competitive", experience: "4+ years", featured: false },
        { id: 5, title: "Marketing Manager", department: "Marketing", location: "Austin, TX", type: "Full-time", salary: "$100k - $140k", experience: "4+ years", featured: false },
    ];

    const departments = ["All", ...new Set(jobOpenings.map(job => job.department))];
    const locations = ["All", ...new Set(jobOpenings.map(job => job.location))];

    const filteredJobs = useMemo(() => jobOpenings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = selectedDepartment === "All" || job.department === selectedDepartment;
        const matchesLoc = selectedLocation === "All" || job.location === selectedLocation;
        return matchesSearch && matchesDept && matchesLoc;
    }), [searchTerm, selectedDepartment, selectedLocation]);
    
    const featuredJobs = filteredJobs.filter(job => job.featured);
    const regularJobs = filteredJobs.filter(job => !job.featured);

    const benefits = [
        { icon: DollarSign, title: "Competitive Compensation", description: "Above-market salaries, equity, and bonuses.", color: "text-green-600" },
        { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance.", color: "text-red-600" },
        { icon: Clock, title: "Flexible Work", description: "Remote-first culture with flexible hours.", color: "text-blue-600" },
        { icon: GraduationCap, title: "Professional Growth", description: "Learning stipends and career development.", color: "text-purple-600" },
    ];

    return (
       <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Briefcase className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Join Our Team</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        We're looking for passionate people to help us build the future of AI-powered creativity.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Open Positions</h2>
                    
                    {/* Filters */}
                    <Card className="mb-8">
                      <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search roles..." className="pl-10" />
                        </div>
                        <div className="flex items-center gap-4">
                          <select onChange={(e) => setSelectedDepartment(e.target.value)} className="w-full md:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 text-sm">
                            {departments.map(d => <option key={d}>{d}</option>)}
                          </select>
                           <select onChange={(e) => setSelectedLocation(e.target.value)} className="w-full md:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 text-sm">
                            {locations.map(l => <option key={l}>{l}</option>)}
                          </select>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                        {filteredJobs.length > 0 ? filteredJobs.map(job => (
                            <Card key={job.id} className={`transition-shadow duration-300 hover:shadow-xl ${job.featured ? 'border-2 border-indigo-500' : ''}`}>
                                <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                          {job.featured && <Badge className="bg-indigo-100 text-indigo-700">Featured</Badge>}
                                          <Badge variant="secondary">{job.department}</Badge>
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{job.title}</h3>
                                        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-2 text-slate-500 dark:text-slate-400 text-sm">
                                            <div className="flex items-center"><MapPin className="h-4 w-4 mr-1.5"/>{job.location}</div>
                                            <div className="flex items-center"><Clock className="h-4 w-4 mr-1.5"/>{job.type}</div>
                                            <div className="flex items-center"><DollarSign className="h-4 w-4 mr-1.5"/>{job.salary}</div>
                                            <div className="flex items-center"><TrendingUp className="h-4 w-4 mr-1.5"/>{job.experience}</div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="mt-4 md:mt-0">
                                        <Button className="bg-indigo-600 text-white hover:bg-indigo-700 w-full md:w-auto">
                                            Apply Now <ArrowRight className="ml-2 h-4 w-4"/>
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )) : (
                            <div className="text-center py-12">
                                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">No matching positions found</h3>
                                <p className="text-slate-500 dark:text-slate-400 mt-2">Try adjusting your filters or check back later!</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-20 text-center">
                   <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Join Us?</h2>
                   <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">We believe in empowering our team to do their best work.</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {benefits.map(benefit => (
                         <div key={benefit.title}>
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mx-auto mb-4">
                                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{benefit.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                        </div>
                     ))}
                   </div>
                </div>
            </div>
       </div>
    );
};

export default CareersPage;
