# Calculadora de IMC con Recomendaciones


La **Calculadora de IMC con Recomendaciones** es una herramienta web interactiva diseñada para ayudar a los usuarios a conocer su estado de salud mediante el cálculo del Índice de Masa Corporal (IMC) y, en función de este, ofrecer recomendaciones personalizadas de dieta y ejercicio. La aplicación clasifica el resultado en tres categorías: **Bajo peso**, **Normal** y **Sobrepeso**, utilizando un sistema de colores que facilita la interpretación de cada estado.

La idea de esta web app orientándola hacia hábitos que mejoren su calidad de vida. La interfaz fue diseñada con un enfoque minimalista y responsivo, garantizando una experiencia óptima tanto en dispositivos móviles como en escritorio.

## Explicación Técnica y Uso del Proyecto

### Tecnologías Utilizadas

- **Next.js y React:** Herramientas para crear interfaces interactivas y componentes reutilizables. Los componentes en React hacen que la organización del código sea modular y escalable.
- **Tailwind CSS:** Se utiliza Tailwind para aplicar estilos modernos y responsivos mediante clases utilitarias, permitiendo realizar ajustes de diseño de forma rápida y consistente.
- **TypeScript:** El uso de TypeScript asegura un tipado estricto que facilita el mantenimiento y la prevención de errores durante el desarrollo.
- **Git y GitHub:** El proyecto se versiona mediante Git y se aloja en GitHub, lo que permite un seguimiento riguroso de los cambios y facilita la colaboración.
- **Vercel:** El despliegue se gestiona en Vercel, que integra automáticamente los cambios realizados en la rama principal del repositorio y proporciona una URL de producción pública.

### Funcionamiento

1. **Selección del Género:**  
   La aplicación permite elegir entre "Hombre" y "Mujer", dado que la clasificación del IMC varía ligeramente según el género.

2. **Ingreso de Datos (Estatura y Peso):**  
   Utilizando sliders interactivos, el usuario puede ajustar su estatura (en centímetros) y su peso (en kilogramos). Estos valores se usan para calcular el IMC con la fórmula:  
   `IMC = peso / (estatura/100)²`

3. **Visualización del Resultado:**  
   El IMC se muestra de forma dinámica y se actualiza en tiempo real conforme se cambian los valores. Se utiliza un sistema de colores para identificar la categoría en la que se encuentra el usuario:  
   - **Bajo peso:** Se indica con un color (por ejemplo, azul).  
   - **Normal:** Indicado en verde.  
   - **Sobrepeso:** Indicado en rojo.

4. **Recomendaciones Personalizadas:**  
   De acuerdo con la categoría obtenida, se muestran sugerencias específicas tanto para la dieta como para el ejercicio. El usuario puede alternar entre ambas opciones mediante botones.

### Instalación y Despliegue

**Para ejecutar el proyecto localmente:**

## 🛠️ Instalación y Ejecución

### Requisitos
- Node.js v18 o superior
- npm v9 o superior

### Pasos

1. **Clonar el repositorio**:
```bash
git clone https://github.com/CamiloToroUCC/Taller-Ui-2025.git
cd bmi-calculator
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

4. **Abrir la aplicación**:
```bash
http://localhost:3000
```

### 🚀 Compilar para Producción
```bash
npm run build && npm start
