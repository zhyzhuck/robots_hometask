export interface IDog {
    id: number;
    name: string;
    bred_for?: string;
    breed_group?: string;
    life_span: string;
    temperament?: string;
    origin?: string;
    weight: IMetric;
    height: IMetric;
    reference_image_id?: string;
}

export interface IMetric {
    imperial: string;
    metric: string;
}

export interface IDogSummary {
    id: number;
    name: string;
    origin: string;
    temperament: string;
    lifeSpan: string;
    size: string;
    characteristics: string[];
}
