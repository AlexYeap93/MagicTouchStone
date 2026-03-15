import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Star, Search, MapPin, Calendar, Filter } from "lucide-react";

export function DriversPage() {
  // This is now "For Drivers" - showing users requesting rides
  const rideRequests = [
    {
      id: 1,
      userName: "Jessica Wang",
      rating: 4.8,
      totalRides: 45,
      pickup: "University of Calgary",
      destination: "DT",
      date: "Oct 8, 2025",
      time: "3:00 PM",
      quadrant: "NW",
      verified: true
    },
    {
      id: 2,
      userName: "David Miller",
      rating: 4.9,
      totalRides: 78,
      pickup: "Brentwood",
      destination: "Airport",
      date: "Oct 8, 2025",
      time: "1:30 PM",
      quadrant: "NW",
      verified: true
    },
    {
      id: 3,
      userName: "Lisa Park",
      rating: 4.7,
      totalRides: 23,
      pickup: "Kensington",
      destination: "University of Calgary",
      date: "Oct 9, 2025",
      time: "8:00 AM",
      quadrant: "NW",
      verified: false
    },
    {
      id: 4,
      userName: "Ryan Cooper",
      rating: 5.0,
      totalRides: 156,
      pickup: "DT",
      destination: "Chinook Centre",
      date: "Oct 8, 2025",
      time: "5:30 PM",
      quadrant: "DT",
      verified: true
    },
    {
      id: 5,
      userName: "Maria Santos",
      rating: 4.6,
      totalRides: 34,
      pickup: "Forest Lawn",
      destination: "University of Calgary",
      date: "Oct 8, 2025",
      time: "2:45 PM",
      quadrant: "SE",
      verified: true
    },
    {
      id: 6,
      userName: "Tom Anderson",
      rating: 4.8,
      totalRides: 92,
      pickup: "Marlborough",
      destination: "DT",
      date: "Oct 9, 2025",
      time: "9:15 AM",
      quadrant: "NE",
      verified: true
    }
  ];

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <h1 className="text-xl font-medium mb-1">For Drivers</h1>
        <p className="text-sm text-primary-foreground/80 mb-4">Users requesting rides</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
          <Input
            placeholder="Search ride requests..."
            className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 bg-white border-b">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            All Areas
          </Button>
          <Button variant="outline" size="sm">NE</Button>
          <Button variant="outline" size="sm">NW</Button>
          <Button variant="outline" size="sm">SE</Button>
          <Button variant="outline" size="sm">SW</Button>
          <Button variant="outline" size="sm">DT</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <Card className="p-3 text-center">
          <p className="text-lg font-medium text-blue-600">{rideRequests.length}</p>
          <p className="text-xs text-muted-foreground">Requests</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-lg font-medium text-green-600">{rideRequests.filter(r => r.verified).length}</p>
          <p className="text-xs text-muted-foreground">Verified</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-lg font-medium text-orange-600">{rideRequests.filter(r => r.date === "Oct 8, 2025").length}</p>
          <p className="text-xs text-muted-foreground">Today</p>
        </Card>
      </div>

      {/* Ride Requests List */}
      <div className="px-4 space-y-3">
        {rideRequests.map((request) => (
          <Card key={request.id} className="p-4">
            <div className="flex items-start gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  {request.userName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium">{request.userName}</h3>
                  {request.verified && (
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {request.quadrant}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{request.rating}</span>
                  <span className="text-sm text-muted-foreground">• {request.totalRides} rides</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span>{request.pickup} → {request.destination}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span>{request.date} • {request.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button size="sm">
                  Accept
                </Button>
                <Button size="sm" variant="outline">
                  Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}