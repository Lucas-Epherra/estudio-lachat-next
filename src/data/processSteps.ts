export interface ProcessStep {
  text: string;
}

/**
 * Pasos del proceso de trabajo del Estudio Jurídico Lachat.
 *
 * Separar estos datos del JSX permite reutilizarlos, editarlos o reordenarlos
 * sin modificar la estructura visual de la sección.
 */
export const processSteps: ProcessStep[] = [
  {
    text: "Contás tu situación y enviás la documentación disponible.",
  },
  {
    text: "Se analiza el caso y se define el camino más conveniente.",
  },
  {
    text: "Recibís el contrato, revisión o intimación lista para avanzar.",
  },
];