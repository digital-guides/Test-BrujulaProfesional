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
                Pregunta {currentQuestion + 1} de {currentDimensionData.questions.length}
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