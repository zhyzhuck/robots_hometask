import { IDog, IMetric } from './interface';

class Metric {
    public imperial: string;
    public metric: string;

    public constructor(row: IMetric) {
        this.imperial = row.imperial;
        this.metric = row.metric;
    }
}

export class Dog {
    public id: number;
    public name: string;
    public bred_for?: string;
    public breed_group?: string;
    public life_span: string;
    public temperament?: string;
    public origin?: string;
    public weight: Metric;
    public height: Metric;
    public reference_image_id?: string;

    public constructor(data: IDog) {
        this.id = data.id;
        this.name = data.name;
        this.bred_for = data.bred_for;
        this.breed_group = data.breed_group;
        this.life_span = data.life_span;
        this.temperament = data.temperament;
        this.origin = data.origin;
        this.weight = new Metric(data.weight);
        this.height = new Metric(data.height);
        this.reference_image_id = data.reference_image_id;
    }

    public getAverageWeight(): number {
        const weights = this.weight.metric.split(' - ').map((w) => parseInt(w.trim(), 10));
        if (weights.length === 2) return (weights[0] + weights[1]) / 2;
        return weights[0] || 0;
    }
    public getTemperamentList(): string[] {
        if (!this.temperament) return [];
        return this.temperament.split(', ').map((t) => t.trim());
    }
    public isLargeBreed(): boolean {
        return this.getAverageWeight() > 25;
    }

    public getSummary(): string {
        return `${this.name} (${this.breed_group ?? 'Unknown group'}): lives ${this.life_span}`;
    }
}
