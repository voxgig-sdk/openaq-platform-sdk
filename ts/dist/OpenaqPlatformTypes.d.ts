export interface Location {
    city?: string;
    coordinates?: Record<string, any>;
    country?: string;
    id?: number;
    isAnalysis?: boolean;
    isMobile?: boolean;
    location?: string;
    parameters?: any[];
    sources?: any[];
}
export interface LocationListMatch {
    city?: string;
    coordinate?: string;
    country?: string;
    limit?: number;
    location?: string;
    order_by?: string;
    page?: number;
    parameter?: string;
    radius?: number;
    sort?: string;
}
export interface Measurement {
    city?: string;
    coordinates?: Record<string, any>;
    country?: string;
    date?: Record<string, any>;
    entity?: string;
    isAnalysis?: boolean;
    isMobile?: boolean;
    location?: string;
    locationId?: number;
    parameter?: string;
    sensorType?: string;
    unit?: string;
    value?: number;
}
export interface MeasurementListMatch {
    city?: string;
    coordinate?: string;
    country?: string;
    date_from?: string;
    date_to?: string;
    limit?: number;
    location?: string;
    location_id?: number;
    order_by?: string;
    page?: number;
    parameter?: string;
    radius?: number;
    sort?: string;
    value_from?: number;
    value_to?: number;
}
