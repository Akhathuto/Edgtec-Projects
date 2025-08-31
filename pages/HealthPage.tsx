import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  Activity, CheckCircle, XCircle, AlertCircle, RefreshCw, Server,
  Database, Globe, Cpu, HardDrive, Network, Users, Clock, TrendingUp, Waves, Sparkles, Heart
} from 'lucide-react';

const HealthCheckPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in a real app, this would be fetched from an API
  const [systemStatus, setSystemStatus] = useState({
    overall: "healthy",
    uptime: "99.98%",
    responseTime: "45ms",
    healthScore: 95
  });

  const [services, setServices] = useState([
    { name: "Web Application", status: "healthy", responseTime: "45ms", icon: Globe, health: 98 },
    { name: "API Services", status: "healthy", responseTime: "32ms", icon: Server, health: 99 },
    { name: "Database", status: "healthy", responseTime: "12ms", icon: Database, health: 96 },
    { name: "AI Model Services", status: "healthy", responseTime: "120ms", icon: Sparkles, health: 95 },
    { name: "File Storage", status: "healthy", responseTime: "28ms", icon: HardDrive, health: 97 },
    { name: "CDN Network", status: "healthy", responseTime: "15ms", icon: Network, health: 99 }
  ]);
  
  const refreshStatus = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date());
      // Slightly randomize data for demo effect
      setSystemStatus(prev => ({...prev, responseTime: `${Math.floor(Math.random() * 20) + 35}ms`}));
      setServices(prev => prev.map(s => ({
          ...s,
          responseTime: `${Math.floor(Math.random() * (s.name === "AI Model Services" ? 50 : 20)) + (s.name === "AI Model Services" ? 80 : 10)}ms`,
          status: s.name === "AI Model Services" ? (Math.random() > 0.3 ? "degraded" : "healthy") : (Math.random() > 0.95 ? "degraded" : "healthy")
      })))
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(refreshStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    if (status === 'healthy') return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (status === 'degraded') return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    return <XCircle className="h-5 w-5 text-red-500" />;
  };

  const getStatusBadge = (status: string) => {
    if (status === 'healthy') return <Badge className="bg-green-100 text-green-800">Operational</Badge>;
    if (status === 'degraded') return <Badge className="bg-yellow-100 text-yellow-800">Degraded</Badge>;
    return <Badge className="bg-red-100 text-red-800">Outage</Badge>;
  };
  
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-75 animate-pulse"></div>
                    <div className="relative h-16 w-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                        <Heart className="h-8 w-8 text-white" />
                    </div>
                </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">System Status</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Real-time monitoring of Edgtec Creative AI services and infrastructure.
            </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Clock className="h-4 w-4"/>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <Button onClick={refreshStatus} disabled={isLoading} variant="outline" size="sm">
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">Overall Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-8 w-8 text-green-500"/>
                        <span className="text-2xl font-bold text-green-500">Healthy</span>
                    </div>
                </CardContent>
            </Card>
            <Card className="text-center">
                 <CardHeader><CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">Uptime (30d)</CardTitle></CardHeader>
                 <CardContent><div className="text-3xl font-bold text-slate-800 dark:text-white">{systemStatus.uptime}</div></CardContent>
            </Card>
             <Card className="text-center">
                 <CardHeader><CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">Avg Response Time</CardTitle></CardHeader>
                 <CardContent><div className="text-3xl font-bold text-slate-800 dark:text-white">{systemStatus.responseTime}</div></CardContent>
            </Card>
            <Card className="text-center">
                 <CardHeader><CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">Health Score</CardTitle></CardHeader>
                 <CardContent>
                    <div className="text-3xl font-bold text-slate-800 dark:text-white">{systemStatus.healthScore}/100</div>
                    <Progress value={systemStatus.healthScore} className="mt-2" />
                 </CardContent>
            </Card>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Service Breakdown</h2>
            <div className="space-y-4">
                {services.map(service => (
                    <Card key={service.name}>
                        <CardContent className="p-4 flex items-center justify-between">
                           <div className="flex items-center gap-4">
                                <service.icon className="h-8 w-8 text-indigo-500" />
                                <div>
                                    <h3 className="font-semibold text-slate-800 dark:text-white">{service.name}</h3>
                                </div>
                           </div>
                           <div className="flex items-center gap-6">
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Response</div>
                                    <div className="font-semibold text-slate-700 dark:text-slate-200">{service.responseTime}</div>
                                </div>
                                 <div className="text-right hidden md:block">
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Health</div>
                                    <div className={`font-semibold ${service.health > 90 ? 'text-green-600' : 'text-yellow-600'}`}>{service.health}%</div>
                                </div>
                                {getStatusBadge(service.status)}
                           </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default HealthCheckPage;