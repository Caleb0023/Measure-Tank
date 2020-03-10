// Este programa usará el sensor de ultrasonidos HCSR04 para medir la distancia
// a diferentes obstáculos en centímetros y mostrarlo por el puerto serie.
#define triggerEmisor 3
#define echoReceptor 2
 
// Variable en la que se va a almacenar el valor correspondiente a la distancia
int distancia;
 
// Variable en la que se va a almacenar el valor correspondiente al tiempo
// Función que se ejecuta una única vez al principio del programa
void setup() 
{
  pinMode(triggerEmisor,OUTPUT); // El emisor emite por lo que es configurado como salida
  pinMode(echoReceptor,INPUT);   // El receptor recibe por lo que es configurado como entrada
  Serial.begin(9600); // Inicia el puerto de comunicaciones en serie
}
 
//Este módulo calcula y devuelve la distancia en cm.
void loop() {
 
  //Para estabilizar el valor del pin Trig se establece a LOW
  digitalWrite (triggerEmisor, LOW);
  delayMicroseconds(10);
 
  //Se lanzan los 8 pulsos del emisor
  digitalWrite (triggerEmisor, HIGH);
  delayMicroseconds(10);
  digitalWrite (triggerEmisor, LOW);
  distancia= pulseIn (echoReceptor, HIGH); 
 
  // Velocidad del sonido en el aire es de 0,034 cm/microsegundos
  // ida y vuelta nos interesa solo la mitad (0,034/2 = 0,017) 
  distancia=distancia/52; 
  Serial.println(distancia);
  delay(100); 
}
