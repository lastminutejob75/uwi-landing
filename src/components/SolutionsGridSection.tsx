import { Calendar, Headphones, MessageCircle, CheckCircle, ArrowRight, Plus } from "lucide-react";

export default function SolutionsGridSection() {
  const solutions = [
    {
      icon: Calendar,
      title: "Prise de Rendez-vous",
      shortDesc: "Optimisez votre agenda et diminuez vos rendez-vous manqués",
      features: [
        "Appels traités",
        "RDV confirmés",
        "Disponible 24/7"
      ],
      benefit: "Optimisez votre agenda et diminuez vos rendez-vous manqués",
      image: "/images/solution-rdv.jpg",
      color: "blue",
      bgGradient: "from-blue-500/10 to-blue-600/5",
    },
    {
      icon: Headphones,
      title: "SAV & Support",
      shortDesc: "Libérez-vous des appels répétitifs, concentrez-vous sur votre métier",
      features: [
        "Nouveau RDV",
        "Qualification automatique",
        "Ticket créé"
      ],
      benefit: "Libérez-vous des appels répétitifs, concentrez-vous sur votre métier",
      image: "/images/solution-sav.jpg",
      color: "green",
      bgGradient: "from-green-500/10 to-green-600/5",
    },
    {
      icon: MessageCircle,
      title: "Questions Techniques",
      shortDesc: "Offrez des réponses instantanées, contactez vos clients sur leur canal préféré",
      features: [
        "Votre RDV est confirmé",
        "Lundi 12 janvier à 14h30",
        "À bientôt"
      ],
      benefit: "Contactez vos clients sur leur canal préféré",
      image: "/images/solution-questions.jpg",
      color: "purple",
      bgGradient: "from-purple-500/10 to-purple-600/5",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        iconBg: "bg-blue-500",
        hoverBorder: "hover:border-blue-400",
        badge: "bg-blue-500",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        iconBg: "bg-green-500",
        hoverBorder: "hover:border-green-400",
        badge: "bg-green-500",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        iconBg: "bg-purple-500",
        hoverBorder: "hover:border-purple-400",
        badge: "bg-purple-500",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comment <span className="text-[#0066CC]">UWI</span> Résout Vos Problèmes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            3 solutions puissantes pour transformer votre relation client
          </p>

          {/* Icons flow - amélioration visuelle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-purple-400"></div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* 3 solutions grid - Design amélioré inspiré des visuels */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const colorClasses = getColorClasses(solution.color);
            return (
              <div
                key={index}
                className="relative animate-slide-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col border-2 border-gray-100 hover:border-gray-200">
                  {/* Image zone - style des visuels */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Overlay subtil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* Badge avec icône checkmark - style des visuels */}
                    <div className={`absolute top-6 right-6 ${colorClasses.iconBg} text-white rounded-full p-4 shadow-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                      <CheckCircle className="h-7 w-7" strokeWidth={2.5} />
                    </div>

                    {/* Mini mockup UWI dans l'image */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className={`${colorClasses.bg} rounded-xl p-2.5 flex-shrink-0`}>
                            <solution.icon className={`h-5 w-5 ${colorClasses.text}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 text-sm mb-1">{solution.title}</p>
                            <div className="space-y-1">
                              {solution.features.slice(0, 2).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-1.5">
                                  <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.iconBg}`}></div>
                                  <p className="text-xs text-gray-600 truncate">{feature}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content card - style des visuels */}
                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-white to-gray-50/50">
                    <div className={`inline-flex items-center gap-2 mb-4 ${colorClasses.bg} ${colorClasses.text} px-4 py-2 rounded-full text-sm font-semibold w-fit`}>
                      <CheckCircle className="h-4 w-4" />
                      <span>{solution.title}</span>
                    </div>

                    <div className="flex items-start gap-3 mb-4 flex-1">
                      <Plus className={`h-6 w-6 ${colorClasses.text} flex-shrink-0 mt-1`} strokeWidth={3} />
                      <p className="text-gray-700 leading-relaxed font-medium">{solution.shortDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom summary badges - design modernisé */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 animate-slide-up delay-300">
          {solutions.map((solution, index) => {
            const colorClasses = getColorClasses(solution.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colorClasses.border} ${colorClasses.hoverBorder} hover:shadow-xl transition-all duration-300 group cursor-default transform hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${colorClasses.bg} shadow-md`}>
                    <solution.icon className={`h-6 w-6 ${colorClasses.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className={`h-4 w-4 ${colorClasses.text}`} />
                      <p className="font-bold text-gray-900 text-sm">{solution.title}</p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{solution.shortDesc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA - design amélioré */}
        <div className="text-center mt-16 animate-slide-up delay-400">
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Découvrir toutes les solutions
            <ArrowRight className="h-6 w-6" />
          </a>
          <p className="mt-6 text-sm text-gray-500 font-medium">
            Essai gratuit 14 jours • Sans carte bancaire • Configuration en 30 min
          </p>
        </div>
      </div>
    </section>
  );
}
