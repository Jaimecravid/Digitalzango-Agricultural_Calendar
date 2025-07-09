import React from 'react';
import { AlertTriangle, Bug, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PestAlert } from '@/types/calendar';

interface PestAlertCardProps {
  alert: PestAlert;
  onViewDetails?: (alertId: string) => void;
  onMarkResolved?: (alertId: string) => void;
}

const getSeverityColor = (severity: PestAlert['severity']) => {
  switch (severity) {
    case 'critica':
      return 'bg-red-500 text-white';
    case 'alta':
      return 'bg-orange-500 text-white';
    case 'media':
      return 'bg-yellow-500 text-black';
    case 'baixa':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const getSeverityIcon = (severity: PestAlert['severity']) => {
  switch (severity) {
    case 'critica':
    case 'alta':
      return <AlertTriangle className="h-4 w-4" />;
    default:
      return <Bug className="h-4 w-4" />;
  }
};

export function PestAlertCard({ alert, onViewDetails, onMarkResolved }: PestAlertCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-AO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <Card className={`border-l-4 ${alert.severity === 'critica' ? 'border-l-red-500' : 
                                   alert.severity === 'alta' ? 'border-l-orange-500' : 
                                   alert.severity === 'media' ? 'border-l-yellow-500' : 
                                   'border-l-green-500'}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {getSeverityIcon(alert.severity)}
            <CardTitle className="text-lg">{alert.pestName}</CardTitle>
          </div>
          <Badge className={getSeverityColor(alert.severity)}>
            {alert.severity.toUpperCase()}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {alert.region}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(alert.dateReported)}
          </span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-1">Culturas Afetadas:</h4>
          <div className="flex flex-wrap gap-1">
            {alert.affectedCrops.map((crop) => (
              <Badge key={crop} variant="outline" className="text-xs">
                {crop}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-1">Descrição:</h4>
          <p className="text-sm text-muted-foreground">{alert.description}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-1">Tratamento Recomendado:</h4>
          <p className="text-sm text-muted-foreground">{alert.treatment}</p>
        </div>
        
        <div className="flex gap-2 pt-2">
          {onViewDetails && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onViewDetails(alert.id)}
            >
              Ver Detalhes
            </Button>
          )}
          {onMarkResolved && alert.isActive && (
            <Button 
              variant="default" 
              size="sm"
              onClick={() => onMarkResolved(alert.id)}
            >
              Marcar como Resolvido
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
