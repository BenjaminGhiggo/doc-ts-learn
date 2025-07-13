import React, { useState } from 'react';
import { BookOpen, Code, Play, ArrowRight, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';

const TypeScriptDocs = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: '🚀 Introducción', icon: BookOpen },
    { id: 'setup', title: '⚙️ Configuración', icon: Code },
    { id: 'basics', title: '📝 Tipos Básicos', icon: Play },
    { id: 'functions', title: '🔧 Funciones', icon: ArrowRight },
    { id: 'objects', title: '📦 Objetos e Interfaces', icon: CheckCircle },
    { id: 'classes', title: '🏗️ Clases', icon: AlertCircle },
    { id: 'generics', title: '🔄 Genéricos', icon: Lightbulb },
    { id: 'advanced', title: '🎯 Conceptos Avanzados', icon: Lightbulb }
  ];

  const CodeBlock = ({ children, title }) => (
    <div className="bg-gray-900 rounded-lg p-4 mb-4">
      {title && <h4 className="text-blue-300 text-sm font-medium mb-2">{title}</h4>}
      <pre className="text-green-300 text-sm overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );

  const TipBox = ({ children, type = "info" }) => {
    const styles = {
      info: "bg-blue-50 border-blue-200 text-blue-800",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
      success: "bg-green-50 border-green-200 text-green-800"
    };
    
    return (
      <div className={`border-l-4 p-4 mb-4 rounded-r ${styles[type]}`}>
        {children}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              📚 Bienvenido a TypeScript
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                ¡Hola! Si ya conoces JavaScript, estás a un paso de dominar TypeScript. 
                Imagina que JavaScript es como escribir en un cuaderno sin líneas, mientras que 
                TypeScript es como tener un cuaderno con líneas que te guían para escribir más ordenadamente.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es TypeScript?</h3>
              
              <p className="text-gray-700 mb-4">
                TypeScript es JavaScript con "superpoderes" de tipado. Es como tener un asistente 
                inteligente que te ayuda a detectar errores antes de que tu código se ejecute.
              </p>

              <TipBox type="info">
                <strong>💡 Analogía:</strong> Si JavaScript es como cocinar sin receta (puedes improvisar pero a veces sale mal), 
                TypeScript es como tener una receta detallada que te guía paso a paso.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ventajas principales:</h3>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Detección temprana de errores:</strong> Los errores se detectan mientras escribes</li>
                <li><strong>Mejor IntelliSense:</strong> Tu editor te sugerirá propiedades y métodos automáticamente</li>
                <li><strong>Refactoring seguro:</strong> Cambiar nombres de variables es más seguro</li>
                <li><strong>Autodocumentación:</strong> El código es más fácil de entender</li>
                <li><strong>Compatibilidad total:</strong> Todo código JavaScript válido es TypeScript válido</li>
              </ul>

              <CodeBlock title="JavaScript vs TypeScript - Ejemplo básico">
{`// JavaScript - Propenso a errores
function saludar(nombre) {
  return "Hola " + nombre.toUppercase(); // ❌ Error: toUppercase no existe
}

console.log(saludar(123)); // ❌ Error: 123 no tiene método toUppercase

// TypeScript - Detecta errores antes de ejecutar
function saludar(nombre: string): string {
  return "Hola " + nombre.toUpperCase(); // ✅ Correcto: toUpperCase
}

console.log(saludar("Ana")); // ✅ Resultado: "Hola ANA"
// console.log(saludar(123)); // ❌ Error detectado: 123 no es string`}
              </CodeBlock>

              <TipBox type="success">
                <strong>🎯 Objetivo de esta guía:</strong> Al final, podrás escribir código TypeScript 
                confiable y aprovechar todas sus ventajas para crear aplicaciones más robustas.
              </TipBox>
            </div>
          </div>
        );

      case 'setup':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ⚙️ Configuración Inicial
            </h2>

            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instalación Global</h3>
              
              <CodeBlock title="Instalar TypeScript globalmente">
{`# Instalar TypeScript globalmente
npm install -g typescript

# Verificar instalación
tsc --version
# Resultado esperado: Version 5.x.x`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tu primer archivo TypeScript</h3>
              
              <CodeBlock title="hello.ts - Tu primer programa">
{`// hello.ts
function saludo(nombre: string): string {
  return \`¡Hola, \${nombre}! Bienvenido a TypeScript.\`;
}

const usuario = "Desarrollador";
console.log(saludo(usuario));
// Resultado: "¡Hola, Desarrollador! Bienvenido a TypeScript."`}
              </CodeBlock>

              <CodeBlock title="Compilar y ejecutar">
{`# Compilar TypeScript a JavaScript
tsc hello.ts

# Esto genera hello.js que puedes ejecutar
node hello.js`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Configuración de proyecto (tsconfig.json)</h3>
              
              <CodeBlock title="tsconfig.json básico">
{`{
  "compilerOptions": {
    "target": "ES2020",           // Versión de JavaScript de salida
    "module": "commonjs",         // Sistema de módulos
    "outDir": "./dist",           // Carpeta de archivos compilados
    "rootDir": "./src",           // Carpeta de código fuente
    "strict": true,               // Modo estricto (recomendado)
    "esModuleInterop": true,      // Compatibilidad con modules
    "skipLibCheck": true,         // Acelera compilación
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],        // Incluir todos los .ts en src
  "exclude": ["node_modules"]     // Excluir dependencias
}`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Consejo:</strong> Usa <code>tsc --init</code> para generar un tsconfig.json 
                con todas las opciones comentadas. Es una excelente referencia.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modo Watch</h3>
              
              <CodeBlock title="Compilación automática">
{`# Recompilar automáticamente cuando cambies archivos
tsc --watch

# O abreviado
tsc -w`}
              </CodeBlock>
            </div>
          </div>
        );

      case 'basics':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              📝 Tipos Básicos
            </h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Los tipos en TypeScript son como etiquetas que le dicen al compilador qué tipo de datos 
                puede contener una variable. Es como organizar tu ropa en cajones etiquetados.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tipos Primitivos</h3>
              
              <CodeBlock title="Tipos básicos con ejemplos">
{`// string - Para texto
let nombre: string = "Ana García";
let mensaje: string = \`Hola, \${nombre}\`;
console.log(mensaje); // Resultado: "Hola, Ana García"

// number - Para números (enteros y decimales)
let edad: number = 25;
let precio: number = 19.99;
let temperatura: number = -5;
console.log(typeof edad); // Resultado: "number"

// boolean - Para verdadero/falso
let esEstudiante: boolean = true;
let estaLogueado: boolean = false;
console.log(esEstudiante && !estaLogueado); // Resultado: false

// Inferencia de tipos - TypeScript deduce el tipo automáticamente
let ciudad = "Madrid"; // TypeScript infiere que es string
let poblacion = 3200000; // TypeScript infiere que es number
let esCapital = true; // TypeScript infiere que es boolean

// ciudad = 123; // ❌ Error: no puede asignar number a string`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Inferencia de tipos:</strong> No siempre necesitas especificar el tipo. 
                TypeScript es inteligente y puede deducirlo del valor que asignas.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Arrays (Listas)</h3>
              
              <CodeBlock title="Arrays tipados">
{`// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];
let pares: Array<number> = [2, 4, 6, 8]; // Sintaxis alternativa

console.log(numeros[0]); // Resultado: 1
console.log(pares.length); // Resultado: 4

// Array de strings
let frutas: string[] = ["manzana", "banana", "naranja"];
frutas.push("uva"); // ✅ Válido
// frutas.push(123); // ❌ Error: 123 no es string

console.log(frutas); // Resultado: ["manzana", "banana", "naranja", "uva"]

// Array mixto usando unión de tipos
let mixto: (string | number)[] = ["Ana", 25, "Madrid", 2024];
console.log(mixto); // Resultado: ["Ana", 25, "Madrid", 2024]`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tuplas - Arrays con estructura fija</h3>
              
              <CodeBlock title="Tuplas para datos estructurados">
{`// Tupla - Array con tipos específicos en posiciones específicas
let coordenada: [number, number] = [40.4168, -3.7038]; // [latitud, longitud]
console.log(\`Madrid está en: \${coordenada[0]}, \${coordenada[1]}\`);
// Resultado: "Madrid está en: 40.4168, -3.7038"

// Tupla con diferentes tipos
let usuario: [string, number, boolean] = ["Ana", 25, true];
let [nombre, edad, activo] = usuario; // Destructuring
console.log(\`\${nombre} tiene \${edad} años y está \${activo ? 'activo' : 'inactivo'}\`);
// Resultado: "Ana tiene 25 años y está activo"

// Tupla con etiquetas (más legible)
let punto: [x: number, y: number] = [10, 20];
console.log(\`Punto en x: \${punto[0]}, y: \${punto[1]}\`);
// Resultado: "Punto en x: 10, y: 20"`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tipos Especiales</h3>
              
              <CodeBlock title="any, unknown, void, never">
{`// any - Cualquier tipo (¡usar con moderación!)
let cualquierCosa: any = "texto";
cualquierCosa = 123;
cualquierCosa = true;
console.log(cualquierCosa); // Resultado: true

// unknown - Más seguro que any
let desconocido: unknown = "podría ser cualquier cosa";
// console.log(desconocido.length); // ❌ Error: debes verificar el tipo primero

if (typeof desconocido === "string") {
  console.log(desconocido.length); // ✅ Ahora es seguro
}

// void - Función que no retorna valor
function saludar(): void {
  console.log("¡Hola mundo!");
  // No retorna nada
}

// null y undefined
let valorNulo: null = null;
let valorUndefined: undefined = undefined;
console.log(\`Nulo: \${valorNulo}, Undefined: \${valorUndefined}\`);
// Resultado: "Nulo: null, Undefined: undefined"`}
              </CodeBlock>

              <TipBox type="warning">
                <strong>⚠️ Consejo sobre any:</strong> Evita usar <code>any</code> cuando sea posible. 
                Es como quitar las protecciones de TypeScript. Úsalo solo cuando migres código JavaScript gradualmente.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Uniones e Intersecciones</h3>
              
              <CodeBlock title="Combinando tipos">
{`// Unión de tipos (|) - puede ser uno u otro
let id: string | number = "abc123";
id = 456; // ✅ También válido
console.log(\`ID: \${id}\`); // Resultado: "ID: 456"

// Función que acepta múltiples tipos
function mostrarId(id: string | number): void {
  if (typeof id === "string") {
    console.log(\`ID como string: \${id.toUpperCase()}\`);
  } else {
    console.log(\`ID como number: \${id.toFixed(2)}\`);
  }
}

mostrarId("abc123"); // Resultado: "ID como string: ABC123"
mostrarId(456.789); // Resultado: "ID como number: 456.79"

// Literal types - valores específicos
let direccion: "norte" | "sur" | "este" | "oeste" = "norte";
// direccion = "noreste"; // ❌ Error: solo acepta los valores específicos

function mover(direccion: "arriba" | "abajo" | "izquierda" | "derecha"): void {
  console.log(\`Moviendo hacia: \${direccion}\`);
}

mover("arriba"); // ✅ Resultado: "Moviendo hacia: arriba"`}
              </CodeBlock>

              <TipBox type="success">
                <strong>🎯 Práctica:</strong> Los literal types son perfectos para valores que solo pueden 
                ser opciones específicas, como estados ("loading" | "success" | "error") o configuraciones.
              </TipBox>
            </div>
          </div>
        );

      case 'functions':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              🔧 Funciones con Tipos
            </h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Las funciones en TypeScript son como contratos claros: especificas qué tipos de datos 
                esperas recibir y qué tipo de dato vas a devolver. Es como una máquina expendedora 
                que solo acepta monedas específicas y te da productos específicos.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Funciones Básicas</h3>
              
              <CodeBlock title="Tipado de parámetros y retorno">
{`// Función con tipos explícitos
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(5, 3)); // Resultado: 8
// console.log(sumar("5", 3)); // ❌ Error: "5" no es number

// Función flecha con tipos
const multiplicar = (x: number, y: number): number => x * y;
console.log(multiplicar(4, 7)); // Resultado: 28

// Función que no retorna valor
function mostrarResultado(resultado: number): void {
  console.log(\`El resultado es: \${resultado}\`);
}

mostrarResultado(sumar(10, 5)); // Resultado: "El resultado es: 15"

// TypeScript puede inferir el tipo de retorno
function dividir(a: number, b: number) { // Infiere que retorna number
  return a / b;
}

console.log(dividir(10, 2)); // Resultado: 5`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Parámetros Opcionales y por Defecto</h3>
              
              <CodeBlock title="Flexibilidad en parámetros">
{`// Parámetros opcionales (?)
function saludar(nombre: string, apellido?: string): string {
  if (apellido) {
    return \`Hola, \${nombre} \${apellido}\`;
  }
  return \`Hola, \${nombre}\`;
}

console.log(saludar("Ana")); // Resultado: "Hola, Ana"
console.log(saludar("Ana", "García")); // Resultado: "Hola, Ana García"

// Parámetros con valores por defecto
function crearUsuario(nombre: string, edad: number = 18, activo: boolean = true): object {
  return { nombre, edad, activo };
}

console.log(crearUsuario("Luis"));
// Resultado: { nombre: "Luis", edad: 18, activo: true }

console.log(crearUsuario("María", 25));
// Resultado: { nombre: "María", edad: 25, activo: true }

console.log(crearUsuario("Pedro", 30, false));
// Resultado: { nombre: "Pedro", edad: 30, activo: false }

// Parámetros rest (...)
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarTodos(1, 2, 3, 4, 5)); // Resultado: 15
console.log(sumarTodos(10, 20)); // Resultado: 30`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Orden de parámetros:</strong> Los parámetros opcionales siempre van después 
                de los obligatorios. Los parámetros con valores por defecto automáticamente son opcionales.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sobrecarga de Funciones</h3>
              
              <CodeBlock title="Múltiples firmas para una función">
{`// Declarar las sobrecargas
function formatear(valor: string): string;
function formatear(valor: number): string;
function formatear(valor: boolean): string;

// Implementación (debe cubrir todos los casos)
function formatear(valor: string | number | boolean): string {
  if (typeof valor === "string") {
    return \`Texto: "\${valor}"\`;
  } else if (typeof valor === "number") {
    return \`Número: \${valor.toFixed(2)}\`;
  } else {
    return \`Booleano: \${valor ? "Verdadero" : "Falso"}\`;
  }
}

console.log(formatear("Hola")); // Resultado: 'Texto: "Hola"'
console.log(formatear(42.567)); // Resultado: "Número: 42.57"
console.log(formatear(true)); // Resultado: "Booleano: Verdadero"

// Ejemplo más práctico: función de búsqueda
function buscar(criterio: string): string[];
function buscar(criterio: number): object | null;

function buscar(criterio: string | number): string[] | object | null {
  if (typeof criterio === "string") {
    // Buscar por nombre
    const resultados = ["Juan", "Ana", "Pedro"].filter(nombre => 
      nombre.toLowerCase().includes(criterio.toLowerCase())
    );
    console.log(\`Búsqueda por nombre "\${criterio}": \${resultados.length} resultados\`);
    return resultados;
  } else {
    // Buscar por ID
    const usuario = criterio === 1 ? { id: 1, nombre: "Juan" } : null;
    console.log(\`Búsqueda por ID \${criterio}: \${usuario ? "encontrado" : "no encontrado"}\`);
    return usuario;
  }
}

console.log(buscar("an")); // Resultado: ["Juan", "Ana"]
console.log(buscar(1)); // Resultado: { id: 1, nombre: "Juan" }`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tipos de Función</h3>
              
              <CodeBlock title="Definiendo tipos para funciones">
{`// Tipo de función como variable
type OperacionMatematica = (a: number, b: number) => number;

const suma: OperacionMatematica = (x, y) => x + y;
const resta: OperacionMatematica = (x, y) => x - y;

console.log(suma(10, 5)); // Resultado: 15
console.log(resta(10, 5)); // Resultado: 5

// Función que recibe otra función como parámetro
function aplicarOperacion(
  a: number, 
  b: number, 
  operacion: OperacionMatematica
): number {
  const resultado = operacion(a, b);
  console.log(\`Operación aplicada: \${resultado}\`);
  return resultado;
}

aplicarOperacion(8, 3, suma); // Resultado: "Operación aplicada: 11"
aplicarOperacion(8, 3, resta); // Resultado: "Operación aplicada: 5"

// Callback con manejo de errores
type Callback<T> = (error: Error | null, data?: T) => void;

function obtenerDatos(callback: Callback<string>): void {
  // Simulando operación asíncrona
  setTimeout(() => {
    const exito = Math.random() > 0.3;
    if (exito) {
      callback(null, "Datos obtenidos correctamente");
    } else {
      callback(new Error("No se pudieron obtener los datos"));
    }
  }, 1000);
}

obtenerDatos((error, datos) => {
  if (error) {
    console.log(\`Error: \${error.message}\`);
  } else {
    console.log(\`Éxito: \${datos}\`);
  }
});`}
              </CodeBlock>

              <TipBox type="success">
                <strong>🎯 Patrón útil:</strong> Definir tipos para funciones que usas frecuentemente 
                hace tu código más legible y reutilizable. Es especialmente útil para callbacks y handlers.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Funciones Asíncronas</h3>
              
              <CodeBlock title="async/await con tipos">
{`// Función asíncrona que retorna Promise
async function obtenerUsuario(id: number): Promise<object> {
  // Simulando llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nombre: \`Usuario\${id}\`, email: \`user\${id}@email.com\` });
    }, 1000);
  });
}

// Usando la función asíncrona
async function mostrarUsuario(): Promise<void> {
  try {
    console.log("Obteniendo usuario...");
    const usuario = await obtenerUsuario(1);
    console.log("Usuario obtenido:", usuario);
    // Resultado después de 1 segundo: Usuario obtenido: { id: 1, nombre: "Usuario1", email: "user1@email.com" }
  } catch (error) {
    console.error("Error al obtener usuario:", error);
  }
}

mostrarUsuario();

// Función que maneja múltiples promesas
async function obtenerMultiplesUsuarios(ids: number[]): Promise<object[]> {
  const promesas = ids.map(id => obtenerUsuario(id));
  const usuarios = await Promise.all(promesas);
  console.log(\`Se obtuvieron \${usuarios.length} usuarios\`);
  return usuarios;
}

obtenerMultiplesUsuarios([1, 2, 3]);`}
              </CodeBlock>

              <TipBox type="warning">
                <strong>⚠️ Manejo de errores:</strong> Siempre usa try/catch con async/await para 
                manejar errores adecuadamente. Las promesas rechazadas se convierten en excepciones.
              </TipBox>
            </div>
          </div>
        );

      case 'objects':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              📦 Objetos e Interfaces
            </h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Los objetos e interfaces en TypeScript son como planos arquitectónicos: definen 
                exactamente qué propiedades debe tener un objeto y qué tipos de datos contienen. 
                Es como tener un formulario con campos específicos que debes completar.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tipado de Objetos Básico</h3>
              
              <CodeBlock title="Objetos con tipos explícitos">
{`// Objeto con tipo explícito
let usuario: {
  nombre: string;
  edad: number;
  activo: boolean;
} = {
  nombre: "Ana García",
  edad: 28,
  activo: true
};

console.log(\`Usuario: \${usuario.nombre}, \${usuario.edad} años\`);
// Resultado: "Usuario: Ana García, 28 años"

// Propiedades opcionales
let configuracion: {
  tema: string;
  idioma?: string; // Opcional
  notificaciones?: boolean; // Opcional
} = {
  tema: "oscuro"
  // idioma y notificaciones son opcionales
};

console.log(configuracion.tema); // Resultado: "oscuro"
console.log(configuracion.idioma ?? "español"); // Resultado: "español"

// Propiedades de solo lectura
let coordenadas: {
  readonly x: number;
  readonly y: number;
} = {
  x: 10,
  y: 20
};

console.log(\`Posición: (\${coordenadas.x}, \${coordenadas.y})\`);
// coordenadas.x = 15; // ❌ Error: no se puede modificar propiedad readonly`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interfaces - Contratos Reutilizables</h3>
              
              <CodeBlock title="Definiendo y usando interfaces">
{`// Interface básica
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  fechaRegistro: Date;
  activo?: boolean; // Propiedad opcional
}

// Usar la interface
const nuevoUsuario: Usuario = {
  id: 1,
  nombre: "Carlos Ruiz",
  email: "carlos@email.com",
  fechaRegistro: new Date()
  // activo es opcional, puede omitirse
};

console.log(\`Nuevo usuario: \${nuevoUsuario.nombre}\`);
// Resultado: "Nuevo usuario: Carlos Ruiz"

// Función que usa la interface
function crearPerfilUsuario(usuario: Usuario): string {
  const estado = usuario.activo ?? true ? "activo" : "inactivo";
  return \`Perfil de \${usuario.nombre} (\${usuario.email}) - Estado: \${estado}\`;
}

console.log(crearPerfilUsuario(nuevoUsuario));
// Resultado: "Perfil de Carlos Ruiz (carlos@email.com) - Estado: activo"

// Interface para métodos
interface Calculadora {
  sumar(a: number, b: number): number;
  restar(a: number, b: number): number;
  resultado: number;
}

const miCalculadora: Calculadora = {
  resultado: 0,
  sumar(a, b) {
    this.resultado = a + b;
    console.log(\`\${a} + \${b} = \${this.resultado}\`);
    return this.resultado;
  },
  restar(a, b) {
    this.resultado = a - b;
    console.log(\`\${a} - \${b} = \${this.resultado}\`);
    return this.resultado;
  }
};

miCalculadora.sumar(10, 5); // Resultado: "10 + 5 = 15"
miCalculadora.restar(8, 3); // Resultado: "8 - 3 = 5"`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 
        )
    }
  }
}Ventaja de las interfaces:</strong> Puedes reutilizar la misma definición 
                en múltiples lugares. Si cambias la interface, todos los objetos que la usan se actualizan automáticamente.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extendiendo Interfaces</h3>
              
              <CodeBlock title="Herencia de interfaces">
{`// Interface base
interface Persona {
  nombre: string;
  edad: number;
}

// Interface que extiende de Persona
interface Empleado extends Persona {
  puesto: string;
  salario: number;
  departamento: string;
}

// Interface que extiende de Empleado
interface Gerente extends Empleado {
  equipoACargo: string[];
  presupuesto: number;
}

const gerente: Gerente = {
  nombre: "Laura Martínez",
  edad: 35,
  puesto: "Gerente de Desarrollo",
  salario: 55000,
  departamento: "Tecnología",
  equipoACargo: ["Ana", "Carlos", "Diego"],
  presupuesto: 200000
};

console.log(\`Gerente: \${gerente.nombre}\`);
console.log(\`Equipo: \${gerente.equipoACargo.join(", ")}\`);
// Resultado: "Gerente: Laura Martínez"
// Resultado: "Equipo: Ana, Carlos, Diego"

// Extender múltiples interfaces
interface Identificable {
  id: string;
}

interface Fechable {
  fechaCreacion: Date;
  fechaActualizacion?: Date;
}

interface Producto extends Identificable, Fechable {
  nombre: string;
  precio: number;
}

const producto: Producto = {
  id: "prod-001",
  nombre: "Laptop Gaming",
  precio: 1299.99,
  fechaCreacion: new Date()
};

console.log(\`Producto: \${producto.nombre} - \$\${producto.precio}\`);
// Resultado: "Producto: Laptop Gaming - $1299.99"`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Propiedades Dinámicas</h3>
              
              <CodeBlock title="Index signatures y propiedades flexibles">
{`// Index signature - propiedades dinámicas
interface Diccionario {
  [clave: string]: string;
}

const traducciones: Diccionario = {
  "hola": "hello",
  "adiós": "goodbye",
  "gracias": "thank you"
};

console.log(traducciones["hola"]); // Resultado: "hello"
traducciones["por favor"] = "please"; // ✅ Permitido
console.log(traducciones["por favor"]); // Resultado: "please"

// Combinando propiedades fijas con dinámicas
interface ConfiguracionCompleta {
  nombre: string; // Propiedad fija requerida
  version: number; // Propiedad fija requerida
  [configuracion: string]: string | number | boolean; // Propiedades dinámicas
}

const config: ConfiguracionCompleta = {
  nombre: "MiApp",
  version: 1.0,
  debug: true,
  maxUsuarios: 1000,
  servidor: "produccion"
};

console.log(\`App: \${config.nombre} v\${config.version}\`);
console.log(\`Debug: \${config.debug}\`);
// Resultado: "App: MiApp v1.0"
// Resultado: "Debug: true"

// Record utility type para mapas clave-valor
type EstadosPermitidos = "pendiente" | "procesando" | "completado" | "error";
type ContadorEstados = Record<EstadosPermitidos, number>;

const contadores: ContadorEstados = {
  pendiente: 5,
  procesando: 2,
  completado: 10,
  error: 1
};

console.log(\`Tareas completadas: \${contadores.completado}\`);
// Resultado: "Tareas completadas: 10"`}
              </CodeBlock>

              <TipBox type="success">
                <strong>🎯 Patrón útil:</strong> Usa Record&lt;K, V&gt; cuando sepas exactamente 
                qué claves quieres permitir. Usa index signatures cuando las claves son dinámicas.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interfaces vs Type Aliases</h3>
              
              <CodeBlock title="Cuándo usar interface vs type">
{`// Interface - Mejor para objetos y cuando necesitas extensión
interface UsuarioInterface {
  id: number;
  nombre: string;
}

// Se puede extender
interface UsuarioCompletoInterface extends UsuarioInterface {
  email: string;
}

// Type alias - Mejor para uniones, primitivos y formas complejas
type ID = string | number;
type Estado = "activo" | "inactivo" | "suspendido";

type UsuarioType = {
  id: ID;
  nombre: string;
  estado: Estado;
};

// Type para uniones complejas
type Respuesta = 
  | { tipo: "exito"; datos: any }
  | { tipo: "error"; mensaje: string };

function manejarRespuesta(respuesta: Respuesta): void {
  if (respuesta.tipo === "exito") {
    console.log("Datos recibidos:", respuesta.datos);
  } else {
    console.log("Error:", respuesta.mensaje);
  }
}

manejarRespuesta({ tipo: "exito", datos: { usuario: "Ana" } });
// Resultado: "Datos recibidos: { usuario: 'Ana' }"

manejarRespuesta({ tipo: "error", mensaje: "No autorizado" });
// Resultado: "Error: No autorizado"

// Ambos son válidos para objetos simples
const usuario1: UsuarioInterface = { id: 1, nombre: "Ana" };
const usuario2: UsuarioType = { id: "usr_001", nombre: "Carlos", estado: "activo" };

console.log(\`Interface: \${usuario1.nombre}\`);
console.log(\`Type: \${usuario2.nombre} - \${usuario2.estado}\`);
// Resultado: "Interface: Ana"
// Resultado: "Type: Carlos - activo"`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Regla general:</strong> Usa <code>interface</code> para definir la forma 
                de objetos que podrían extenderse. Usa <code>type</code> para uniones, primitivos 
                y formas que no cambiarán.
              </TipBox>
            </div>
          </div>
        );

      case 'classes':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              🏗️ Clases y POO
            </h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Las clases en TypeScript son como moldes para crear objetos con comportamiento y propiedades específicas. 
                Es como tener una plantilla de "Usuario" que define qué propiedades y métodos tendrán todos los usuarios.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clases Básicas</h3>
              
              <CodeBlock title="Definición y uso de clases">
{`class Usuario {
  // Propiedades
  nombre: string;
  email: string;
  fechaRegistro: Date;

  // Constructor
  constructor(nombre: string, email: string) {
    this.nombre = nombre;
    this.email = email;
    this.fechaRegistro = new Date();
  }

  // Métodos
  saludar(): string {
    return \`Hola, soy \${this.nombre}\`;
  }

  obtenerInfo(): string {
    const diasRegistrado = Math.floor(
      (Date.now() - this.fechaRegistro.getTime()) / (1000 * 60 * 60 * 24)
    );
    return \`\${this.nombre} (\${this.email}) - Registrado hace \${diasRegistrado} días\`;
  }
}

// Crear instancias
const usuario1 = new Usuario("Ana García", "ana@email.com");
const usuario2 = new Usuario("Carlos Ruiz", "carlos@email.com");

console.log(usuario1.saludar()); // Resultado: "Hola, soy Ana García"
console.log(usuario2.obtenerInfo()); 
// Resultado: "Carlos Ruiz (carlos@email.com) - Registrado hace 0 días"

// Verificar tipo
console.log(usuario1 instanceof Usuario); // Resultado: true`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modificadores de Acceso</h3>
              
              <CodeBlock title="public, private, protected">
{`class CuentaBancaria {
  public titular: string;        // Accesible desde cualquier lugar
  private saldo: number;         // Solo accesible dentro de la clase
  protected numeroCuenta: string; // Accesible en la clase y subclases

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.numeroCuenta = \`ACC-\${Date.now()}\`;
  }

  // Método público para consultar saldo
  public consultarSaldo(): number {
    console.log(\`Saldo de \${this.titular}: $\${this.saldo}\`);
    return this.saldo;
  }

  // Método público para depositar
  public depositar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(\`Depósito de $\${cantidad} realizado. Nuevo saldo: $\${this.saldo}\`);
    } else {
      console.log("La cantidad debe ser positiva");
    }
  }

  // Método privado para validaciones internas
  private validarTransaccion(cantidad: number): boolean {
    return cantidad > 0 && cantidad <= this.saldo;
  }

  public retirar(cantidad: number): boolean {
    if (this.validarTransaccion(cantidad)) {
      this.saldo -= cantidad;
      console.log(\`Retiro de $\${cantidad} realizado. Nuevo saldo: $\${this.saldo}\`);
      return true;
    } else {
      console.log("Transacción inválida: fondos insuficientes o cantidad inválida");
      return false;
    }
  }
}

const cuenta = new CuentaBancaria("María López", 1000);

console.log(cuenta.titular); // ✅ Accesible - Resultado: "María López"
cuenta.consultarSaldo(); // ✅ Accesible - Resultado: "Saldo de María López: $1000"
cuenta.depositar(500); // ✅ Resultado: "Depósito de $500 realizado. Nuevo saldo: $1500"
cuenta.retirar(200); // ✅ Resultado: "Retiro de $200 realizado. Nuevo saldo: $1300"

// console.log(cuenta.saldo); // ❌ Error: 'saldo' es privado
// cuenta.validarTransaccion(100); // ❌ Error: método privado`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Buena práctica:</strong> Usa propiedades privadas para datos internos 
                y proporciona métodos públicos para interactuar con ellos. Esto se llama encapsulación.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Herencia</h3>
              
              <CodeBlock title="Extensión de clases con extends">
{`// Clase base
class Vehiculo {
  protected marca: string;
  protected modelo: string;
  protected año: number;

  constructor(marca: string, modelo: string, año: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerInfo(): string {
    return \`\${this.marca} \${this.modelo} (\${this.año})\`;
  }

  arrancar(): void {
    console.log(\`\${this.obtenerInfo()} está arrancando...\`);
  }
}

// Clase derivada
class Coche extends Vehiculo {
  private numeroPuertas: number;
  private tipoTransmision: string;

  constructor(marca: string, modelo: string, año: number, puertas: number, transmision: string) {
    super(marca, modelo, año); // Llamar al constructor padre
    this.numeroPuertas = puertas;
    this.tipoTransmision = transmision;
  }

  // Sobrescribir método padre
  obtenerInfo(): string {
    const infoBase = super.obtenerInfo(); // Llamar método padre
    return \`\${infoBase} - \${this.numeroPuertas} puertas, \${this.tipoTransmision}\`;
  }

  // Método específico de Coche
  abrirMaletero(): void {
    console.log(\`Abriendo maletero del \${this.marca} \${this.modelo}\`);
  }
}

class Motocicleta extends Vehiculo {
  private cilindrada: number;

  constructor(marca: string, modelo: string, año: number, cilindrada: number) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerInfo(): string {
    return \`\${super.obtenerInfo()} - \${this.cilindrada}cc\`;
  }

  hacerCaballito(): void {
    console.log(\`¡Haciendo caballito con la \${this.marca}!\`);
  }
}

// Usar las clases
const miCoche = new Coche("Toyota", "Corolla", 2023, 4, "Automática");
const miMoto = new Motocicleta("Honda", "CBR", 2022, 600);

console.log(miCoche.obtenerInfo()); 
// Resultado: "Toyota Corolla (2023) - 4 puertas, Automática"

console.log(miMoto.obtenerInfo()); 
// Resultado: "Honda CBR (2022) - 600cc"

miCoche.arrancar(); // Resultado: "Toyota Corolla (2023) - 4 puertas, Automática está arrancando..."
miCoche.abrirMaletero(); // Resultado: "Abriendo maletero del Toyota Corolla"

miMoto.arrancar(); // Resultado: "Honda CBR (2022) - 600cc está arrancando..."
miMoto.hacerCaballito(); // Resultado: "¡Haciendo caballito con la Honda!"`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clases Abstractas</h3>
              
              <CodeBlock title="Plantillas que no se pueden instanciar directamente">
{`// Clase abstracta - no se puede instanciar directamente
abstract class Forma {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  // Método concreto (implementado)
  obtenerNombre(): string {
    return this.nombre;
  }

  // Método abstracto (debe ser implementado por las subclases)
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}

class Rectangulo extends Forma {
  private ancho: number;
  private alto: number;

  constructor(ancho: number, alto: number) {
    super("Rectángulo");
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea(): number {
    const area = this.ancho * this.alto;
    console.log(\`Área del \${this.nombre}: \${area}\`);
    return area;
  }

  calcularPerimetro(): number {
    const perimetro = 2 * (this.ancho + this.alto);
    console.log(\`Perímetro del \${this.nombre}: \${perimetro}\`);
    return perimetro;
  }
}

class Circulo extends Forma {
  private radio: number;

  constructor(radio: number) {
    super("Círculo");
    this.radio = radio;
  }

  calcularArea(): number {
    const area = Math.PI * this.radio * this.radio;
    console.log(\`Área del \${this.nombre}: \${area.toFixed(2)}\`);
    return area;
  }

  calcularPerimetro(): number {
    const perimetro = 2 * Math.PI * this.radio;
    console.log(\`Perímetro del \${this.nombre}: \${perimetro.toFixed(2)}\`);
    return perimetro;
  }
}

// Usar las formas
const rectangulo = new Rectangulo(5, 3);
const circulo = new Circulo(4);

rectangulo.calcularArea(); // Resultado: "Área del Rectángulo: 15"
rectangulo.calcularPerimetro(); // Resultado: "Perímetro del Rectángulo: 16"

circulo.calcularArea(); // Resultado: "Área del Círculo: 50.27"
circulo.calcularPerimetro(); // Resultado: "Perímetro del Círculo: 25.13"

// const forma = new Forma("test"); // ❌ Error: no se puede instanciar clase abstracta

// Función que trabaja con cualquier forma
function mostrarInformacion(forma: Forma): void {
  console.log(\`--- Información de \${forma.obtenerNombre()} ---\`);
  forma.calcularArea();
  forma.calcularPerimetro();
}

mostrarInformacion(rectangulo);
mostrarInformacion(circulo);`}
              </CodeBlock>

              <TipBox type="success">
                <strong>🎯 Clases abstractas:</strong> Úsalas como plantillas cuando quieras que 
                todas las subclases implementen ciertos métodos, pero también quieras proporcionar 
                funcionalidad común.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Implementando Interfaces</h3>
              
              <CodeBlock title="Clases que implementan contratos">
{`// Interfaces como contratos
interface Volador {
  altitudMaxima: number;
  volar(): void;
  aterrizar(): void;
}

interface Nadador {
  profundidadMaxima: number;
  nadar(): void;
  emerger(): void;
}

// Clase que implementa una interface
class Avion implements Volador {
  altitudMaxima: number;
  private combustible: number;

  constructor(altitudMaxima: number) {
    this.altitudMaxima = altitudMaxima;
    this.combustible = 100;
  }

  volar(): void {
    if (this.combustible > 10) {
      this.combustible -= 10;
      console.log(\`Avión volando a \${this.altitudMaxima}m. Combustible: \${this.combustible}%\`);
    } else {
      console.log("No hay suficiente combustible para volar");
    }
  }

  aterrizar(): void {
    console.log("Avión aterrizando...");
  }

  repostar(): void {
    this.combustible = 100;
    console.log("Combustible repuesto al 100%");
  }
}

// Clase que implementa múltiples interfaces
class Pato implements Volador, Nadador {
  altitudMaxima: number = 1000;
  profundidadMaxima: number = 3;

  volar(): void {
    console.log(\`Pato volando hasta \${this.altitudMaxima}m de altura\`);
  }

  aterrizar(): void {
    console.log("Pato aterrizando en el agua");
  }

  nadar(): void {
    console.log(\`Pato nadando hasta \${this.profundidadMaxima}m de profundidad\`);
  }

  emerger(): void {
    console.log("Pato emergiendo a la superficie");
  }

  graznar(): void {
    console.log("¡Cuac cuac!");
  }
}

// Usar las implementaciones
const boeing = new Avion(12000);
const patito = new Pato();

boeing.volar(); // Resultado: "Avión volando a 12000m. Combustible: 90%"
boeing.aterrizar(); // Resultado: "Avión aterrizando..."

patito.volar(); // Resultado: "Pato volando hasta 1000m de altura"
patito.aterrizar(); // Resultado: "Pato aterrizando en el agua"
patito.nadar(); // Resultado: "Pato nadando hasta 3m de profundidad"
patito.graznar(); // Resultado: "¡Cuac cuac!"

// Función que acepta cualquier volador
function hacerVolar(volador: Volador): void {
  console.log(\`Preparando vuelo a altitud máxima: \${volador.altitudMaxima}m\`);
  volador.volar();
}

hacerVolar(boeing);
hacerVolar(patito);`}
              </CodeBlock>

              <TipBox type="warning">
                <strong>⚠️ Diferencia clave:</strong> <code>extends</code> hereda implementación 
                (es-un), <code>implements</code> garantiza estructura (puede-hacer). Una clase 
                puede implementar múltiples interfaces pero solo extender una clase.
              </TipBox>
            </div>
          </div>
        );

      case 'generics':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              🔄 Genéricos - Código Reutilizable
            </h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Los genéricos en TypeScript son como moldes flexibles que se adaptan al tipo de datos que les pases. 
                Es como tener una caja que puede contener cualquier tipo de objeto, pero una vez que defines qué contiene, 
                mantiene esa forma específica.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Funciones Genéricas</h3>
              
              <CodeBlock title="Funciones que trabajan con cualquier tipo">
{`// Sin genéricos - función específica para cada tipo
function obtenerPrimeroString(items: string[]): string {
  return items[0];
}

function obtenerPrimeroNumber(items: number[]): number {
  return items[0];
}

// Con genéricos - una función para todos los tipos
function obtenerPrimero<T>(items: T[]): T {
  console.log(\`Obteniendo primer elemento de array con \${items.length} elementos\`);
  return items[0];
}

// Uso explícito del tipo
const primerNumero = obtenerPrimero<number>([1, 2, 3, 4]);
const primeraFruta = obtenerPrimero<string>(["manzana", "banana", "naranja"]);

console.log(\`Primer número: \${primerNumero}\`); // Resultado: "Primer número: 1"
console.log(\`Primera fruta: \${primeraFruta}\`); // Resultado: "Primera fruta: manzana"

// TypeScript puede inferir el tipo automáticamente
const primerBoolean = obtenerPrimero([true, false, true]); // T se infiere como boolean
console.log(\`Primer boolean: \${primerBoolean}\`); // Resultado: "Primer boolean: true"

// Función genérica más compleja
function intercambiar<T, U>(valor1: T, valor2: U): [U, T] {
  console.log(\`Intercambiando \${valor1} con \${valor2}\`);
  return [valor2, valor1];
}

const [a, b] = intercambiar("Hola", 42);
console.log(\`a: \${a} (tipo: \${typeof a}), b: \${b} (tipo: \${typeof b})\`);
// Resultado: "a: 42 (tipo: number), b: Hola (tipo: string)"

// Función genérica con restricciones
function obtenerLongitud<T extends { length: number }>(item: T): number {
  console.log(\`El item tiene longitud: \${item.length}\`);
  return item.length;
}

obtenerLongitud("Hola mundo"); // ✅ string tiene propiedad length
obtenerLongitud([1, 2, 3, 4]); // ✅ array tiene propiedad length
// obtenerLongitud(123); // ❌ Error: number no tiene propiedad length`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Ventaja de genéricos:</strong> Escribes el código una vez y funciona 
                con múltiples tipos, manteniendo la seguridad de tipos. Es como tener una función 
                súper versátil pero sin perder precisión.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clases Genéricas</h3>
              
              <CodeBlock title="Clases que funcionan con diferentes tipos">
{`// Clase genérica para almacenar datos
class Contenedor<T> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
    console.log(\`Elemento agregado. Total: \${this.elementos.length}\`);
  }

  obtenerTodos(): T[] {
    console.log(\`Devolviendo \${this.elementos.length} elementos\`);
    return [...this.elementos]; // Copia defensiva
  }

  obtenerPorIndice(indice: number): T | undefined {
    const elemento = this.elementos[indice];
    console.log(\`Elemento en posición \${indice}: \${elemento}\`);
    return elemento;
  }

  eliminar(elemento: T): boolean {
    const indice = this.elementos.indexOf(elemento);
    if (indice > -1) {
      this.elementos.splice(indice, 1);
      console.log(\`Elemento eliminado. Restantes: \${this.elementos.length}\`);
      return true;
    }
    console.log("Elemento no encontrado");
    return false;
  }

  get cantidad(): number {
    return this.elementos.length;
  }
}

// Contenedor de strings
const contenedorTextos = new Contenedor<string>();
contenedorTextos.agregar("TypeScript");
contenedorTextos.agregar("JavaScript");
contenedorTextos.agregar("Python");

console.log("Textos:", contenedorTextos.obtenerTodos());
// Resultado: "Textos: ['TypeScript', 'JavaScript', 'Python']"

// Contenedor de números
const contenedorNumeros = new Contenedor<number>();
contenedorNumeros.agregar(10);
contenedorNumeros.agregar(20);
contenedorNumeros.agregar(30);

console.log("Primer número:", contenedorNumeros.obtenerPorIndice(0));
// Resultado: "Primer número: 10"

// Contenedor de objetos personalizados
interface Usuario {
  id: number;
  nombre: string;
}

const contenedorUsuarios = new Contenedor<Usuario>();
contenedorUsuarios.agregar({ id: 1, nombre: "Ana" });
contenedorUsuarios.agregar({ id: 2, nombre: "Carlos" });

console.log("Usuarios:", contenedorUsuarios.obtenerTodos());
// Resultado: "Usuarios: [{ id: 1, nombre: 'Ana' }, { id: 2, nombre: 'Carlos' }]"`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interfaces Genéricas</h3>
              
              <CodeBlock title="Contratos flexibles con genéricos">
{`// Interface genérica para respuestas de API
interface RespuestaAPI<T> {
  exitoso: boolean;
  datos?: T;
  error?: string;
  timestamp: Date;
}

// Interface genérica para repositorio de datos
interface Repositorio<T, ID> {
  obtenerPorId(id: ID): Promise<T | null>;
  obtenerTodos(): Promise<T[]>;
  crear(item: Omit<T, 'id'>): Promise<T>;
  actualizar(id: ID, item: Partial<T>): Promise<T | null>;
  eliminar(id: ID): Promise<boolean>;
}

// Implementación específica para usuarios
interface Usuario {
  id: string;
  nombre: string;
  email: string;
  fechaCreacion: Date;
}

class RepositorioUsuarios implements Repositorio<Usuario, string> {
  private usuarios: Usuario[] = [];
  private proximoId = 1;

  async obtenerPorId(id: string): Promise<Usuario | null> {
    const usuario = this.usuarios.find(u => u.id === id);
    console.log(\`Buscando usuario con ID \${id}: \${usuario ? 'encontrado' : 'no encontrado'}\`);
    return usuario || null;
  }

  async obtenerTodos(): Promise<Usuario[]> {
    console.log(\`Devolviendo \${this.usuarios.length} usuarios\`);
    return [...this.usuarios];
  }

  async crear(datosUsuario: Omit<Usuario, 'id'>): Promise<Usuario> {
    const nuevoUsuario: Usuario = {
      id: \`user_\${this.proximoId++}\`,
      ...datosUsuario,
      fechaCreacion: new Date()
    };
    
    this.usuarios.push(nuevoUsuario);
    console.log(\`Usuario creado: \${nuevoUsuario.nombre} (ID: \${nuevoUsuario.id})\`);
    return nuevoUsuario;
  }

  async actualizar(id: string, cambios: Partial<Usuario>): Promise<Usuario | null> {
    const usuario = await this.obtenerPorId(id);
    if (usuario) {
      Object.assign(usuario, cambios);
      console.log(\`Usuario \${id} actualizado\`);
      return usuario;
    }
    return null;
  }

  async eliminar(id: string): Promise<boolean> {
    const indice = this.usuarios.findIndex(u => u.id === id);
    if (indice > -1) {
      this.usuarios.splice(indice, 1);
      console.log(\`Usuario \${id} eliminado\`);
      return true;
    }
    console.log(\`Usuario \${id} no encontrado para eliminar\`);
    return false;
  }
}

// Uso del repositorio
const repoUsuarios = new RepositorioUsuarios();

// Crear usuarios
repoUsuarios.crear({
  nombre: "Ana García",
  email: "ana@email.com",
  fechaCreacion: new Date()
});

repoUsuarios.crear({
  nombre: "Carlos Ruiz",
  email: "carlos@email.com",
  fechaCreacion: new Date()
});

// Función genérica para manejar respuestas de API
function procesarRespuesta<T>(respuesta: RespuestaAPI<T>): T | null {
  console.log(\`Procesando respuesta del \${respuesta.timestamp.toISOString()}\`);
  
  if (respuesta.exitoso && respuesta.datos) {
    console.log("Respuesta exitosa, devolviendo datos");
    return respuesta.datos;
  } else {
    console.log(\`Error en respuesta: \${respuesta.error || 'Error desconocido'}\`);
    return null;
  }
}

// Simular respuestas de API
const respuestaExitosa: RespuestaAPI<Usuario[]> = {
  exitoso: true,
  datos: [
    { id: "1", nombre: "Ana", email: "ana@email.com", fechaCreacion: new Date() }
  ],
  timestamp: new Date()
};

const respuestaError: RespuestaAPI<Usuario[]> = {
  exitoso: false,
  error: "No autorizado",
  timestamp: new Date()
};

procesarRespuesta(respuestaExitosa); // Procesa datos exitosamente
procesarRespuesta(respuestaError); // Maneja el error`}
              </CodeBlock>

              <TipBox type="success">
                <strong>🎯 Patrón útil:</strong> Los genéricos son especialmente útiles para bibliotecas, 
                utilidades y patrones como repositorios, donde la lógica es la misma pero los tipos cambian.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Utility Types - Genéricos Incorporados</h3>
              
              <CodeBlock title="Tipos utilitarios que vienen con TypeScript">
{`// Definimos una interface base
interface UsuarioCompleto {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  activo: boolean;
  fechaRegistro: Date;
}

// Partial<T> - Hace todas las propiedades opcionales
type UsuarioParcial = Partial<UsuarioCompleto>;

function actualizarUsuario(id: number, cambios: UsuarioParcial): void {
  console.log(\`Actualizando usuario ${id} con:`, Object.keys(cambios));
  // Solo necesitas pasar las propiedades que quieres cambiar
}

actualizarUsuario(1, { nombre: "Nuevo Nombre" }); // ✅ Solo nombre
actualizarUsuario(2, { email: "nuevo@email.com", activo: false }); // ✅ Email y estado

// Required<T> - Hace todas las propiedades obligatorias
type UsuarioObligatorio = Required<UsuarioParcial>;

// Pick<T, K> - Selecciona solo ciertas propiedades
type UsuarioPublico = Pick<UsuarioCompleto, 'id' | 'nombre' | 'email'>;

function mostrarPerfilPublico(usuario: UsuarioPublico): void {
  console.log(\`Perfil: \${usuario.nombre} (\${usuario.email})\`);
  // No puede acceder a edad, activo o fechaRegistro
}

const usuarioCompleto: UsuarioCompleto = {
  id: 1,
  nombre: "Ana García",
  email: "ana@email.com",
  edad: 28,
  activo: true,
  fechaRegistro: new Date()
};

mostrarPerfilPublico(usuarioCompleto); // ✅ Funciona, toma solo las propiedades necesarias

// Omit<T, K> - Excluye ciertas propiedades
type UsuarioSinId = Omit<UsuarioCompleto, 'id' | 'fechaRegistro'>;

function crearUsuario(datosUsuario: UsuarioSinId): UsuarioCompleto {
  const nuevoUsuario: UsuarioCompleto = {
    id: Math.floor(Math.random() * 1000),
    fechaRegistro: new Date(),
    ...datosUsuario
  };
  
  console.log(\`Usuario creado: \${nuevoUsuario.nombre} con ID \${nuevoUsuario.id}\`);
  return nuevoUsuario;
}

crearUsuario({
  nombre: "Carlos Ruiz",
  email: "carlos@email.com",
  edad: 32,
  activo: true
});

// Record<K, T> - Crea un objeto con claves específicas
type EstadosUsuario = 'activo' | 'inactivo' | 'suspendido' | 'eliminado';
type ContadorEstados = Record<EstadosUsuario, number>;

const estadisticas: ContadorEstados = {
  activo: 150,
  inactivo: 25,
  suspendido: 5,
  eliminado: 3
};

console.log(\`Usuarios activos: \${estadisticas.activo}\`);
console.log(\`Total usuarios: \${Object.values(estadisticas).reduce((a, b) => a + b, 0)}\`);

// ReturnType<T> - Obtiene el tipo de retorno de una función
function obtenerConfiguracion() {
  return {
    tema: "oscuro" as const,
    idioma: "es" as const,
    notificaciones: true
  };
}

type TipoConfiguracion = ReturnType<typeof obtenerConfiguracion>;
// TipoConfiguracion es: { tema: "oscuro"; idioma: "es"; notificaciones: boolean; }

function aplicarConfiguracion(config: TipoConfiguracion): void {
  console.log(\`Aplicando configuración: tema \${config.tema}, idioma \${config.idioma}\`);
}

aplicarConfiguracion(obtenerConfiguracion());`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Utility Types son tus amigos:</strong> TypeScript incluye muchos tipos 
                utilitarios que resuelven problemas comunes. Aprende a usarlos para escribir menos 
                código y ser más expresivo.
              </TipBox>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              🎯 Conceptos Avanzados
            </h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Estos conceptos avanzados te ayudarán a escribir código TypeScript más sofisticado y expresivo. 
                Son como herramientas especializadas para casos específicos.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Type Guards - Verificaciones de Tipo</h3>
              
              <CodeBlock title="Asegurar tipos en tiempo de ejecución">
{`// Type guards con typeof
function procesarValor(valor: string | number): string {
  if (typeof valor === "string") {
    // TypeScript sabe que aquí 'valor' es string
    console.log(\`Procesando string: \${valor.toUpperCase()}\`);
    return valor.toUpperCase();
  } else {
    // TypeScript sabe que aquí 'valor' es number
    console.log(\`Procesando número: \${valor.toFixed(2)}\`);
    return valor.toFixed(2);
  }
}

procesarValor("hola mundo"); // Resultado: "Procesando string: HOLA MUNDO"
procesarValor(42.567); // Resultado: "Procesando número: 42.57"

// Type guards con instanceof
class Perro {
  ladrar(): void {
    console.log("¡Guau guau!");
  }
}

class Gato {
  maullar(): void {
    console.log("¡Miau miau!");
  }
}

function hacerSonido(animal: Perro | Gato): void {
  if (animal instanceof Perro) {
    animal.ladrar(); // TypeScript sabe que es Perro
  } else {
    animal.maullar(); // TypeScript sabe que es Gato
  }
}

const miPerro = new Perro();
const miGato = new Gato();

hacerSonido(miPerro); // Resultado: "¡Guau guau!"
hacerSonido(miGato); // Resultado: "¡Miau miau!"

// Type guards personalizados
interface Pez {
  tipo: "pez";
  nadar(): void;
}

interface Pajaro {
  tipo: "pajaro";
  volar(): void;
}

// Función type guard personalizada
function esPez(animal: Pez | Pajaro): animal is Pez {
  return animal.tipo === "pez";
}

function moverAnimal(animal: Pez | Pajaro): void {
  if (esPez(animal)) {
    console.log("Es un pez, puede nadar");
    animal.nadar(); // TypeScript sabe que es Pez
  } else {
    console.log("Es un pájaro, puede volar");
    animal.volar(); // TypeScript sabe que es Pajaro
  }
}

const pez: Pez = {
  tipo: "pez",
  nadar() { console.log("Nadando... 🐠"); }
};

const pajaro: Pajaro = {
  tipo: "pajaro",
  volar() { console.log("Volando... 🦅"); }
};

moverAnimal(pez); // Resultado: "Es un pez, puede nadar" + "Nadando... 🐠"
moverAnimal(pajaro); // Resultado: "Es un pájaro, puede volar" + "Volando... 🦅"`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-8 00 mb-4">Tipos Condicionales</h3>
              
              <CodeBlock title="Lógica a nivel de tipos">
{`// Tipo condicional básico
type EsString<T> = T extends string ? true : false;

type Prueba1 = EsString<string>; // true
type Prueba2 = EsString<number>; // false

console.log("Tipo condicional básico funciona correctamente");

// Tipo condicional más útil
type SinArray<T> = T extends any[] ? never : T;

type NumeroSinArray = SinArray<number>; // number
type StringSinArray = SinArray<string[]>; // never

// Tipo condicional con infer
type ObtenerTipoArray<T> = T extends (infer U)[] ? U : never;

type TipoElemento1 = ObtenerTipoArray<string[]>; // string
type TipoElemento2 = ObtenerTipoArray<number[]>; // number
type TipoElemento3 = ObtenerTipoArray<boolean>; // never

// Ejemplo práctico: extraer tipo de retorno de Promise
type DesenvolarPromise<T> = T extends Promise<infer U> ? U : T;

async function obtenerNumero(): Promise<number> {
  return 42;
}

type TipoRetorno = DesenvolarPromise<ReturnType<typeof obtenerNumero>>; // number

// Función que demuestra el uso
function procesarResultado<T>(
  promesaOValor: T
): DesenvolarPromise<T> extends string 
  ? string 
  : DesenvolarPromise<T> extends number 
  ? number 
  : unknown {
  
  console.log("Procesando resultado...");
  // La lógica real dependería del tipo
  return promesaOValor as any;
}

// Tipo condicional distributivo
type ToArray<T> = T extends any ? T[] : never;

type ArraysUnidos = ToArray<string | number>; // string[] | number[]

console.log("Tipos condicionales configurados correctamente");`}
              </CodeBlock>

              <TipBox type="info">
                <strong>💡 Tipos condicionales:</strong> Son como if/else para tipos. Úsalos cuando 
                necesites que el tipo resultante dependa de las características del tipo de entrada.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mapped Types - Transformando Tipos</h3>
              
              <CodeBlock title="Crear nuevos tipos basados en otros">
{`// Tipo base
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

// Mapped type: hacer todas las propiedades opcionales
type Opcional<T> = {
  [P in keyof T]?: T[P];
};

type UsuarioOpcional = Opcional<Usuario>;
// Resultado: { id?: number; nombre?: string; email?: string; activo?: boolean; }

// Mapped type: hacer todas las propiedades de solo lectura
type SoloLectura<T> = {
  readonly [P in keyof T]: T[P];
};

type UsuarioSoloLectura = SoloLectura<Usuario>;

// Mapped type: convertir todas las propiedades a strings
type AString<T> = {
  [P in keyof T]: string;
};

type UsuarioString = AString<Usuario>;
// Resultado: { id: string; nombre: string; email: string; activo: string; }

// Mapped type con condicionales
type SoloStrings<T> = {
  [P in keyof T]: T[P] extends string ? T[P] : never;
};

type PropiedadesString = SoloStrings<Usuario>;
// Resultado: { id: never; nombre: string; email: string; activo: never; }

// Ejemplo práctico: crear versiones "loading" de tipos
type ConEstadoCarga<T> = {
  [P in keyof T]: {
    valor: T[P];
    cargando: boolean;
    error?: string;
  };
};

type UsuarioConCarga = ConEstadoCarga<Pick<Usuario, 'nombre' | 'email'>>;

const usuarioConEstado: UsuarioConCarga = {
  nombre: {
    valor: "Ana García",
    cargando: false
  },
  email: {
    valor: "ana@email.com",
    cargando: true,
    error: undefined
  }
};

console.log(\`Usuario: \${usuarioConEstado.nombre.valor}\`);
console.log(\`Email cargando: \${usuarioConEstado.email.cargando}\`);

// Key remapping - cambiar nombres de claves
type ConPrefijo<T, Prefijo extends string> = {
  [P in keyof T as \`\${Prefijo}\${string & P}\`]: T[P];
};

type UsuarioConPrefijo = ConPrefijo<Usuario, "user_">;
// Resultado: { user_id: number; user_nombre: string; user_email: string; user_activo: boolean; }

// Filtrar propiedades por tipo
type SoloNumeros<T> = {
  [P in keyof T as T[P] extends number ? P : never]: T[P];
};

type PropiedadesNumericas = SoloNumeros<Usuario>; // { id: number; }

console.log("Mapped types funcionando correctamente");`}
              </CodeBlock>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Template Literal Types</h3>
              
              <CodeBlock title="Tipos basados en plantillas de texto">
{`// Template literal types básicos
type Saludo = \`Hola \${string}\`;

const saludo1: Saludo = "Hola Ana"; // ✅ Válido
const saludo2: Saludo = "Hola Carlos"; // ✅ Válido
// const saludo3: Saludo = "Adiós Ana"; // ❌ Error

// Combinando con uniones
type Direccion = "norte" | "sur" | "este" | "oeste";
type Movimiento = \`mover-\${Direccion}\`;

const movimiento1: Movimiento = "mover-norte"; // ✅ Válido
const movimiento2: Movimiento = "mover-este"; // ✅ Válido
// const movimiento3: Movimiento = "mover-arriba"; // ❌ Error

// Ejemplo práctico: URLs tipadas
type Metodo = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "usuarios" | "productos" | "pedidos";
type APICall = \`\${Metodo} /api/\${Endpoint}\`;

function hacerLlamadaAPI(llamada: APICall): void {
  console.log(\`Realizando: \${llamada}\`);
}

hacerLlamadaAPI("GET /api/usuarios"); // ✅ Válido
hacerLlamadaAPI("POST /api/productos"); // ✅ Válido
// hacerLlamadaAPI("GET /api/clientes"); // ❌ Error

// Template literals con manipulación
type Capitalizar<S extends string> = S extends \`\${infer Primera}\${infer Resto}\`
  ? \`\${Uppercase<Primera>}\${Resto}\`
  : S;

type NombreCapitalizado = Capitalizar<"juan">; // "Juan"

// Eventos tipados
type EventoBase = "click" | "focus" | "blur";
type EventoHandler = \`on\${Capitalize<EventoBase>}\`;

type ManejadoresEventos = {
  [E in EventoHandler]: () => void;
};

const manejadores: ManejadoresEventos = {
  onClick: () => console.log("Click detectado"),
  onFocus: () => console.log("Focus detectado"),
  onBlur: () => console.log("Blur detectado")
};

// Función que demuestra el uso
function configurarEventos(elemento: HTMLElement, handlers: Partial<ManejadoresEventos>): void {
  if (handlers.onClick) {
    elemento.addEventListener('click', handlers.onClick);
    console.log("Handler de click configurado");
  }
  if (handlers.onFocus) {
    elemento.addEventListener('focus', handlers.onFocus);
    console.log("Handler de focus configurado");
  }
}

// Simulando uso (en un navegador real usarías un elemento HTML real)
console.log("Template literal types configurados");

// Rutas tipadas para aplicaciones
type Ruta = "/" | "/usuarios" | "/productos" | "/configuracion";
type RutaConParametro = \`/usuarios/\${number}\` | \`/productos/\${string}\`;
type RutaCompleta = Ruta | RutaConParametro;

function navegar(ruta: RutaCompleta): void {
  console.log(\`Navegando a: \${ruta}\`);
}

navegar("/"); // ✅ Válido
navegar("/usuarios/123"); // ✅ Válido  
navegar("/productos/laptop"); // ✅ Válido
// navegar("/admin"); // ❌ Error`}
              </CodeBlock>

              <TipBox type="success">
                <strong>🎯 Template Literal Types:</strong> Perfectos para APIs tipadas, sistemas de 
                routing, nombres de eventos, y cualquier caso donde combines strings de forma predecible.
              </TipBox>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Módulos y Namespaces</h3>
              
              <CodeBlock title="Organización de código a gran escala">
{`// Namespace para agrupar tipos relacionados
namespace API {
  export interface Usuario {
    id: number;
    nombre: string;
    email: string;
  }

  export interface Respuesta<T> {
    exito: boolean;
    datos?: T;
    error?: string;
  }

  export namespace Validaciones {
    export function esEmailValido(email: string): boolean {
      const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      const valido = regex.test(email);
      console.log(\`Email \${email} es \${valido ? 'válido' : 'inválido'}\`);
      return valido;
    }

    export function esNombreValido(nombre: string): boolean {
      const valido = nombre.length >= 2 && nombre.length <= 50;
      console.log(\`Nombre "\${nombre}" es \${valido ? 'válido' : 'inválido'}\`);
      return valido;
    }
  }

  export class ClienteAPI {
    private baseUrl: string = "https://api.ejemplo.com";

    async obtenerUsuario(id: number): Promise<Respuesta<Usuario>> {
      console.log(\`Obteniendo usuario con ID: \${id}\`);
      
      // Simulación de llamada a API
      return {
        exito: true,
        datos: {
          id,
          nombre: \`Usuario\${id}\`,
          email: \`usuario\${id}@email.com\`
        }
      };
    }

    async crearUsuario(datosUsuario: Omit<Usuario, 'id'>): Promise<Respuesta<Usuario>> {
      console.log(\`Creando usuario: \${datosUsuario.nombre}\`);
      
      if (!Validaciones.esEmailValido(datosUsuario.email)) {
        return {
          exito: false,
          error: "Email inválido"
        };
      }

      if (!Validaciones.esNombreValido(datosUsuario.nombre)) {
        return {
          exito: false,
          error: "Nombre inválido"
        };
      }

      return {
        exito: true,
        datos: {
          id: Math.floor(Math.random() * 1000),
          ...datosUsuario
        }
      };
    }
  }
}

// Uso del namespace
const cliente = new API.ClienteAPI();

// Validaciones
API.Validaciones.esEmailValido("test@email.com"); // true
API.Validaciones.esNombreValido("Ana"); // true

// Crear usuario
cliente.crearUsuario({
  nombre: "Ana García",
  email: "ana@email.com"
}).then(respuesta => {
  if (respuesta.exito) {
    console.log("Usuario creado:", respuesta.datos);
  } else {
    console.log("Error:", respuesta.error);
  }
});

// Alias para namespaces largos
namespace Utils {
  export namespace Fechas {
    export function formatear(fecha: Date): string {
      return fecha.toLocaleDateString('es-ES');
    }

    export function esHoy(fecha: Date): boolean {
      const hoy = new Date();
      return fecha.toDateString() === hoy.toDateString();
    }
  }

  export namespace Textos {
    export function capitalizar(texto: string): string {
      return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }

    export function truncar(texto: string, longitud: number): string {
      return texto.length > longitud ? texto.slice(0, longitud) + "..." : texto;
    }
  }
}

// Crear alias para uso más cómodo
const { Fechas, Textos } = Utils;

console.log(Fechas.formatear(new Date())); // Fecha actual formateada
console.log(Textos.capitalizar("hola mundo")); // "Hola mundo"
console.log(Textos.truncar("Este es un texto muy largo", 10)); // "Este es un..."

// Extender namespaces existentes
namespace API {
  export namespace Validaciones {
    export function esTelefonoValido(telefono: string): boolean {
      const regex = /^\\+?[0-9]{9,15}$/;
      const valido = regex.test(telefono);
      console.log(\`Teléfono \${telefono} es \${valido ? 'válido' : 'inválido'}\`);
      return valido;
    }
  }
}

// Ahora API.Validaciones tiene también esTelefonoValido
API.Validaciones.esTelefonoValido("+34123456789"); // true`}
              </CodeBlock>

              <TipBox type="warning">
                <strong>⚠️ Módulos vs Namespaces:</strong> Para nuevos proyectos, prefiere módulos ES6 
                (import/export) sobre namespaces. Los namespaces son útiles para organizar tipos y 
                utilidades internas, pero los módulos ES6 ofrecen mejor tree-shaking y compatibilidad.
              </TipBox>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🎓 ¡Felicitaciones!</h3>
                <p className="text-gray-700 mb-3">
                  Has completado el recorrido por TypeScript. Ahora tienes las herramientas para:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>Escribir código TypeScript seguro y expresivo</li>
                  <li>Aprovechar el sistema de tipos para detectar errores temprano</li>
                  <li>Crear código reutilizable con genéricos</li>
                  <li>Organizar proyectos grandes con interfaces y clases</li>
                  <li>Usar características avanzadas para casos específicos</li>
                </ul>
                <p className="text-gray-700 font-medium">
                  💡 <strong>Próximos pasos:</strong> Practica estos conceptos en proyectos reales, 
                  configura tu entorno de desarrollo con TypeScript, y explora librerías populares 
                  que aprovechan al máximo el tipado estático.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            📚 TypeScript
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guía completa y pedagógica para dominar TypeScript desde JavaScript
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              🎯 Para principiantes
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              📝 Con ejemplos prácticos
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              🚀 Progresivo
            </span>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 lg:sticky lg:top-8 lg:self-start">
            <nav className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">📖 Índice</h2>
              <ul className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon size={18} />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {renderContent()}
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            💙 Creado con TypeScript y React para aprender TypeScript
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Domina TypeScript paso a paso • De JavaScript a TypeScript sin dolor
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TypeScriptDocs;