import { readable, writable } from 'svelte/store';

export const dataTransfer = writable([]);
export const dataTransferFull = writable([]);

export const caudalimetros =readable([
    { id: 'C000', name: 'Escaldadora de Pollos', disable: false, velNoria: 4000, caudal: 800, minCaudal: 0.2, unit: 'litros/aves', correction: 1 },
    { id: 'C001', name: 'Ducha Post desplume', disable: false, velNoria: 4000, caudal: 800, minCaudal: 0.2, unit: 'litros/aves', correction: 1 },
    { id: 'C002', name: 'Escaldadora de Garras', disable: false, velNoria: 4000, caudal: 56, minCaudal: 1.0, unit: 'litros/kg Garras', correction: 0.07 },
    { id: 'C003', name: 'Lavadora Externa e Interna de Carcasas', disable: false, velNoria: 4000, caudal: 600, minCaudal: 1.5, unit: 'litros/aves', correction: 1 },
    { id: 'C004', name: 'Pre Chiller de Carcasas', disable: true, velNoria: 4000, caudal: 6000, minCaudal: 0.2, unit: 'litros/carcasas', correction: 1 },
    { id: 'C005', name: 'Chiller n° 1 de Carcasas', disable: true, velNoria: 4000, caudal: 6000, minCaudal: 0.2, unit: 'litros/carcasas', correction: 1 },
    { id: 'C006', name: 'Chiller n° 2 de Carcasas', disable: false, velNoria: 4000, caudal: 6000, minCaudal: 1.5, unit: 'litros/carcasas', correction: 1 },
    { id: 'C007', name: 'Chiller Hígado/Corazón', disable: false, velNoria: 4000, caudal: 300, minCaudal: 1.0, unit: 'litro/kg Hígado/Corazón', correction: 0.075 },
    { id: 'C008', name: 'Chiller de Molleja', disable: false, velNoria: 4000, caudal: 120, minCaudal: 1.0, unit: 'litros/kg de Mollejas', correction: 0.03 },
    { id: 'C009', name: 'Chiller de Cogotes', disable: false, velNoria: 4000, caudal: 320, minCaudal: 1.0, unit: 'litros/kg de Cogotes', correction: 0.08 },
    { id: 'C010', name: 'Chiller de Garras', disable: false, velNoria: 4000, caudal: 280, minCaudal: 1.0, unit: 'litros/kg de Garras', correction: 0.07 },
]);