import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Star, Search, MapPin, Calendar, Filter, Plus } from "lucide-react";
import { useState } from "react";
import { RequestRideDialog } from "./RequestRideDialog";
import { toast } from "sonner@2.0.3";

export function UsersPage() {
  const [showRequestDialog, setShowRequestDialog] = useState(false);
  
  // This is now "For Users" - showing available drivers
  const drivers = [
    {
      id: 1,
      name: "Sarah Chen",
      rating: 4.9,
      totalRides: 156,
      car: "Honda Civic",
      carType: "5-seater" as const,
      year: "2020",
      color: "White",
      currentLocation: "DT",
      quadrant: "DT",
      nextRide: "2:30 PM to University of Calgary",
      availableSeats: 3
    },
    {
      id: 2,
      name: "Mike Johnson",
      rating: 4.7,
      totalRides: 89,
      car: "Toyota Corolla",
      carType: "5-seater" as const,
      year: "2019",
      color: "Silver",
      currentLocation: "Kensington",
      quadrant: "NW",
      nextRide: "4:00 PM to Chinook Centre",
      availableSeats: 2
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5.0,
      totalRides: 234,
      car: "Mazda CX-5",
      carType: "7-seater" as const,
      year: "2021",
      color: "Blue",
      currentLocation: "Beltline",
      quadrant: "DT",
      nextRide: "3:45 PM to Airport",
      availableSeats: 5
    },
    {
      id: 4,
      name: "James Wilson",
      rating: 4.8,
      totalRides: 123,
      car: "Honda Pilot",
      carType: "7-seater" as const,
      year: "2020",
      color: "Black",
      currentLocation: "Marlborough",
      quadrant: "NE",
      nextRide: "1:00 PM to University of Calgary",
      availableSeats: 4
    },
    {
      id: 5,
      name: "Sophie Turner",
      rating: 4.9,
      totalRides: 198,
      car: "Hyundai Elantra",
      carType: "5-seater" as const,
      year: "2022",
      color: "Red",
      currentLocation: "Marda Loop",
      quadrant: "SW",
      nextRide: "5:00 PM to DT",
      availableSeats: 3
    }
  ];

  const handleRequestRide = (data: { date: Date; time: string; destination: string }) => {
    console.log("Ride requested:", data);
    // Handle ride request submission
    toast.success("Ride request submitted!", {
      description: `Looking for a ride to ${data.destination} on ${data.date.toLocaleDateString()} at ${data.time}.`
    });
  };

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-medium mb-1">For Users</h1>
            <p className="text-sm text-primary-foreground/80">Find available drivers</p>
          </div>
          <Button 
            size="sm" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={() => setShowRequestDialog(true)}
          >
            <Plus className="w-4 h-4 mr-1" />
            Request
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
          <Input
            placeholder="Search drivers..."
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

      {/* Driver Stats */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <Card className="p-3 text-center">
          <p className="text-lg font-medium text-green-600">{drivers.length}</p>
          <p className="text-xs text-muted-foreground">Available</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-lg font-medium text-blue-600">{drivers.filter(d => d.carType === "5-seater").length}</p>
          <p className="text-xs text-muted-foreground">5-Seaters</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-lg font-medium text-purple-600">{drivers.filter(d => d.carType === "7-seater").length}</p>
          <p className="text-xs text-muted-foreground">7-Seaters</p>
        </Card>
      </div>

      {/* Driver List */}
      <div className="px-4 space-y-3">
        {drivers.map((driver) => (
          <Card key={driver.id} className="p-4">
            <div className="flex items-start gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {driver.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium">{driver.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {driver.quadrant}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {driver.carType}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{driver.rating}</span>
                  <span className="text-sm text-muted-foreground">• {driver.totalRides} rides</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Car:</span>
                    <span>{driver.year} {driver.car} ({driver.color})</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span>{driver.currentLocation}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span>{driver.nextRide}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 font-medium">{driver.availableSeats} seats available</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button size="sm">
                  Book
                </Button>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <RequestRideDialog 
        open={showRequestDialog} 
        onClose={() => setShowRequestDialog(false)}
        onSubmit={handleRequestRide}
      />
    </div>
  );
}