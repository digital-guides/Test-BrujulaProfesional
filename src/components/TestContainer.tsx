import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Compass, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { testData, calculateResults, type TestResult, type ComprehensiveResult } from '@/lib/test-data';
import logo from '@/assets/logo.png';

type TestPhase = 'intro' | 'test' | 'results';

export default function TestContainer() {
  const [phase, setPhase] = useState<TestPhase>('intro');
  const [currentDimension, setCurrentDimension] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<ComprehensiveResult | null>(null);

  const totalQuestions = testData.reduce((sum, dimension) => sum + dimension.questions.length, 0);
  const answeredQuestions = Object.keys(answers).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  const currentDimensionData = testData[currentDimension];
  const currentQuestionData = currentDimensionData?.questions[currentQuestion];
  
  // Calcular número de pregunta total actual
  const currentQuestionNumber = testData.slice(0, currentDimension).reduce((sum, dimension) => sum + dimension.questions.length, 0) + currentQuestion + 1;

  const handleAnswer = (option: string) => {
    if (!currentQuestionData) return;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestionData.id]: option
    }));
  };

  const handleNext = () => {
    if (currentQuestion < currentDimensionData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentDimension < testData.length - 1) {
      setCurrentDimension(prev => prev + 1);
      setCurrentQuestion(0);
    } else {
      // Test completado
      const testResults = calculateResults(answers);
      setResults(testResults);
      setPhase('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentDimension > 0) {
      setCurrentDimension(prev => prev - 1);
      setCurrentQuestion(testData[currentDimension - 1].questions.length - 1);
    }
  };

  const canProceed = currentQuestionData ? answers[currentQuestionData.id] : false;
  const isFirstQuestion = currentDimension === 0 && currentQuestion === 0;
  const isLastQuestion = currentDimension === testData.length - 1 && 
    currentQuestion === testData[testData.length - 1].questions.length - 1;

  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-brujula-gradient flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img src={logo} alt="Desbloquea tu Potencial Profesional" className="h-20" />
            </div>
            <div className="flex items-center justify-center gap-3">
              <Compass className="h-8 w-8 text-brujula-accent" />
              <CardTitle className="text-3xl font-bold text-brujula-primary">
                TEST DE AUTODIAGNÓSTICO INTEGRAL
              </CardTitle>
            </div>
            <p className="text-xl font-medium text-brujula-accent">
              BRÚJULA DE EVOLUCIÓN PROFESIONAL 🧭
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-brujula-primary">Objetivo del Test:</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Evaluar tu situación actual en desarrollo profesional</li>
                <li>✓ Identificar fortalezas y áreas de mejora</li>
                <li>✓ Obtener una perspectiva integral de tu posicionamiento</li>
                <li>✓ Desarrollar estrategias específicas de crecimiento</li>
                <li>✓ Establecer una hoja de ruta clara para evolucionar</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-brujula-primary">Instrucciones:</h3>
              <ul className="space-y-2 text-sm">
                <li>📍 Tiempo estimado: 20-30 minutos</li>
                <li>📍 40 preguntas divididas en 5 dimensiones</li>
                <li>📍 Responde con honestidad absoluta</li>
                <li>📍 Basándote en los últimos 12 meses</li>
                <li>📍 Selecciona UNA opción por pregunta</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-brujula-accent">5</div>
                <div className="text-sm text-muted-foreground">Dimensiones</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-brujula-accent">40</div>
                <div className="text-sm text-muted-foreground">Preguntas</div>
              </div>
            </div>

            <Button 
              onClick={() => setPhase('test')} 
              className="w-full h-12 text-lg bg-brujula-accent-gradient hover:opacity-90"
            >
              <Compass className="mr-2 h-5 w-5" />
              Comenzar Test
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === 'results' && results) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-brujula-gradient text-primary-foreground">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Compass className="h-8 w-8" />
                <CardTitle className="text-2xl">Resultados de tu Brújula Profesional</CardTitle>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">{results.totalPercentage}%</div>
                <div className="text-xl">{results.overallLevel}</div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            {results.dimensionResults.map((result, index) => (
              <Card key={index} className="relative">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{result.dimension}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{result.description}</span>
                      <span className="font-semibold">{result.percentage}%</span>
                    </div>
                    <Progress value={result.percentage} className="h-2" />
                    <div className={`text-sm font-medium ${
                      result.percentage >= 85 ? 'text-success' :
                      result.percentage >= 70 ? 'text-info' :
                      result.percentage >= 55 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {result.level}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Matriz de Autorreflexión Profesional */}
          <Card className="border-brujula-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brujula-primary">
                <Compass className="h-5 w-5 text-brujula-accent" />
                Matriz de Autorreflexión Profesional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 1. Análisis de Fortalezas Distintivas */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brujula-primary flex items-center gap-2">
                  <div className="w-6 h-6 bg-brujula-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  Análisis de Fortalezas Distintivas
                </h3>
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <p className="text-sm text-success-foreground/80 mb-3">
                    Dimensiones donde obtuviste puntuación EXCELENTE o ALTA:
                  </p>
                  <div className="space-y-2">
                    {results.dimensionResults
                      .filter(result => result.percentage >= 70)
                      .map((result, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm">
                          <div className="w-3 h-3 bg-success rounded-full" />
                          <span className="font-medium">{result.dimension}:</span>
                          <span>{result.percentage}% - {result.level}</span>
                        </div>
                      ))}
                  </div>
                  {results.dimensionResults.filter(result => result.percentage >= 70).length > 0 && (
                    <div className="mt-4 p-3 bg-white/50 rounded border border-success/30">
                      <p className="text-sm text-success-foreground font-medium mb-2">💡 Reflexión estratégica:</p>
                      <ul className="text-sm space-y-1 text-success-foreground/90">
                        <li>• ¿Estas fortalezas están alineadas con tus objetivos profesionales?</li>
                        <li>• ¿Cómo puedes usar estas fortalezas para compensar áreas más débiles?</li>
                        <li>• ¿Qué oportunidades puedes crear aprovechando estas fortalezas?</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Análisis de Brechas Críticas */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brujula-primary flex items-center gap-2">
                  <div className="w-6 h-6 bg-brujula-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  Análisis de Brechas Críticas
                </h3>
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <p className="text-sm text-destructive-foreground/80 mb-3">
                    Dimensiones donde obtuviste puntuación MEDIA o BAJA (priorizar desarrollo):
                  </p>
                  <div className="space-y-2">
                    {results.dimensionResults
                      .filter(result => result.percentage < 70)
                      .sort((a, b) => a.percentage - b.percentage)
                      .map((result, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm">
                          <div className={`w-3 h-3 rounded-full ${
                            result.percentage < 40 ? 'bg-destructive' : 'bg-warning'
                          }`} />
                          <span className="font-medium">{result.dimension}:</span>
                          <span>{result.percentage}% - {result.level}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            result.percentage < 40 ? 'bg-destructive/10 text-destructive' : 'bg-warning/10 text-warning'
                          }`}>
                            {result.percentage < 40 ? 'Impacto Alto' : 'Impacto Medio'}
                          </span>
                        </div>
                      ))}
                  </div>
                  {results.dimensionResults.filter(result => result.percentage < 70).length > 0 && (
                    <div className="mt-4 p-3 bg-white/50 rounded border border-destructive/30">
                      <p className="text-sm text-destructive font-medium mb-2">🎯 Priorización de desarrollo:</p>
                      {results.dimensionResults
                        .filter(result => result.percentage < 70)
                        .sort((a, b) => a.percentage - b.percentage)
                        .slice(0, 3)
                        .map((result, index) => (
                          <div key={index} className="text-sm text-destructive mb-1">
                            {index + 1}. <span className="font-medium">{result.dimension}</span> - Brecha crítica #{index + 1}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Análisis de Contexto Profesional */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brujula-primary flex items-center gap-2">
                  <div className="w-6 h-6 bg-brujula-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  Análisis de Contexto Profesional Actual
                </h3>
                <div className="bg-info/5 border border-info/20 rounded-lg p-4">
                  <p className="text-sm text-info-foreground/80 mb-3">
                    Factores contextuales que influyen en tu desarrollo:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-info-foreground">🏢 Cultura organizacional:</span>
                      <p className="text-xs text-muted-foreground mt-1">Evalúa cómo el ambiente de tu empresa facilita o limita tu crecimiento</p>
                    </div>
                    <div>
                      <span className="font-medium text-info-foreground">🚀 Oportunidades internas:</span>
                      <p className="text-xs text-muted-foreground mt-1">Identifica proyectos, roles o programas disponibles</p>
                    </div>
                    <div>
                      <span className="font-medium text-info-foreground">📈 Tendencias del mercado:</span>
                      <p className="text-xs text-muted-foreground mt-1">Analiza las demandas futuras de tu industria</p>
                    </div>
                    <div>
                      <span className="font-medium text-info-foreground">🤝 Red profesional:</span>
                      <p className="text-xs text-muted-foreground mt-1">Evalúa la calidad y amplitud de tus conexiones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Análisis de Aspiraciones Profesionales */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brujula-primary flex items-center gap-2">
                  <div className="w-6 h-6 bg-brujula-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  Análisis de Aspiraciones Profesionales
                </h3>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-primary-foreground/80 mb-3">
                    Tu visión profesional ideal:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-primary">🎯 Visión a 3 años:</span>
                      <span className="text-xs text-muted-foreground">¿Dónde te ves profesionalmente?</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-primary">🚀 Visión a 5 años:</span>
                      <span className="text-xs text-muted-foreground">¿Qué rol o posición aspiras alcanzar?</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-primary">💫 Impacto deseado:</span>
                      <span className="text-xs text-muted-foreground">¿Qué tipo de impacto quieres generar?</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-primary">🏆 Reconocimiento:</span>
                      <span className="text-xs text-muted-foreground">¿Qué reconocimiento profesional buscas?</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-white/50 rounded border border-primary/30">
                    <p className="text-xs text-primary font-medium mb-2">🌟 Brecha entre situación actual y aspiraciones:</p>
                    <div className="grid md:grid-cols-2 gap-2 text-xs text-primary/90">
                      <div>• Competencias que necesitas desarrollar</div>
                      <div>• Experiencias que necesitas adquirir</div>
                      <div>• Red profesional que necesitas construir</div>
                      <div>• Recursos que necesitas conseguir</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brujula-accent" />
                Recomendaciones Personalizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {results.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brujula-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button 
              onClick={() => {
                setPhase('intro');
                setCurrentDimension(0);
                setCurrentQuestion(0);
                setAnswers({});
                setResults(null);
              }}
              variant="outline"
              className="border-brujula-primary text-brujula-primary hover:bg-brujula-primary hover:text-primary-foreground"
            >
              Realizar Nuevo Test
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Fase del test
  return (
    <div className="min-h-screen bg-background">
      {/* Header con progreso */}
      <div className="bg-brujula-gradient text-primary-foreground p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Compass className="h-6 w-6" />
            <div className="flex-1">
              <div className="text-sm opacity-90">
                Dimensión {currentDimension + 1} de {testData.length}: {currentDimensionData.name}
              </div>
              <div className="text-lg font-semibold">
                Pregunta {currentQuestionNumber} de {totalQuestions}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Progreso Total</div>
              <div className="font-semibold">{answeredQuestions}/{totalQuestions}</div>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-primary-foreground/20" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 pt-8">
        <Card>
          <CardHeader>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-brujula-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                {currentQuestionData?.id}
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">
                  {currentDimensionData.description}
                </p>
                <CardTitle className="text-xl leading-relaxed">
                  {currentQuestionData?.text}
                </CardTitle>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {currentQuestionData && Object.entries(currentQuestionData.options).map(([key, value]) => (
              <Button
                key={key}
                variant={answers[currentQuestionData.id] === key ? "default" : "outline"}
                className={`w-full text-left justify-start p-4 h-auto min-h-16 whitespace-normal ${
                  answers[currentQuestionData.id] === key 
                    ? "bg-brujula-accent text-accent-foreground" 
                    : "hover:bg-accent/10"
                }`}
                onClick={() => handleAnswer(key)}
              >
                <span className="font-semibold mr-3 text-lg">
                  {key.toUpperCase()})
                </span>
                <span className="flex-1 text-sm leading-relaxed">{value}</span>
              </Button>
            ))}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={isFirstQuestion}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Anterior
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex items-center gap-2 bg-brujula-accent-gradient hover:opacity-90"
              >
                {isLastQuestion ? 'Ver Resultados' : 'Siguiente'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}