import React from "react";
import { ArrowRight, Phone, Calendar, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

export default function WorkflowArtisanSection() {
  const steps = [
    {
      number: "1",
      badge: "Plombier Débordé",
      badgeColor: "bg-red-100 text-red-700 border-red-300",
      title: "Appels entrants",
      description: "3 appels entrants, demandes multiples, manque de temps",
      icon: Phone,
      iconColor: "from-red-500 to-red-600",
      iconBg: "bg-red-100",
      image: "/images/workflow-plumber-calls.jpg",
      status: "problem",
    },
    {
      number: "2",
      badge: "Qualification Automatique",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-300",
      title: "UWI trie les appels",
      description: "Urgence - Localisation - Type d'Intervention",
      features: [
        "3 Nouveaux Appels",
        "UWI Qualification En Cours",
        "Demande Devis - Fuite à réparer",
        "SAV - Radiateur à purger",
        "Demain - Appels Reçu: 11/11"
      ],
      icon: Calendar,
      iconColor: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      image: "/images/workflow-uwi-qualification.jpg",
      status: "processing",
    },
    {
      number: "3",
      badge: "Planification Optimale",
      badgeColor: "bg-green-100 text-green-700 border-green-300",
      title: "Planning complet",
      description: "Agenda complet, déplacements réduits, maximisation du CA",
      features: [
        "Autoréchui",
        "3 Planning Réglé",
        "14:00 - Dijon Plage Deboucher écoute",
        "15:30 - Longvic Purger radiateur",
        "16:15 - Dijon Détartrer chauffe eau"
      ],
      icon: TrendingUp,
      iconColor: "from-green-500 to-green-600",
      iconBg: "bg-green-100",
      image: "/images/workflow-optimized-planning.jpg",
      status: "success",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-[#0066CC]">UWI</span> Optimise Votre Planning d'Interventions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple en 3 étapes pour transformer chaque appel en RDV confirmé
          </p>

          {/* Process flow icons */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-500">Appels</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-blue-400"></div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-500">Triage</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-500">Planning</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col border-2 border-gray-100 hover:border-gray-200">
                {/* Image section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* Step number badge */}
                  <div className={`absolute top-6 left-6 bg-gradient-to-br ${step.iconColor} text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-2xl`}>
                    {step.number}
                  </div>

                  {/* Status badge */}
                  <div className={`absolute top-6 right-6 ${step.badgeColor} px-4 py-2 rounded-full text-xs font-bold border-2 shadow-lg backdrop-blur-sm`}>
                    {step.badge}
                  </div>

                  {/* Phone mockup overlay - if processing or success */}
                  {(step.status === "processing" || step.status === "success") && step.features && (
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                          <div className={`${step.iconBg} rounded-xl p-2.5`}>
                            <step.icon className={`h-5 w-5 bg-gradient-to-br ${step.iconColor} bg-clip-text text-transparent`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.iconColor} animate-pulse`}></div>
                              <p className="font-bold text-gray-900 text-sm">{step.features[0]}</p>
                            </div>
                            <p className="text-xs text-gray-600">{step.features[1]}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {step.features.slice(2, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs">
                              <CheckCircle className={`h-3.5 w-3.5 mt-0.5 ${step.status === 'success' ? 'text-green-500' : 'text-blue-500'} flex-shrink-0`} />
                              <p className="text-gray-700 leading-snug">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Problem indicator for step 1 */}
                  {step.status === "problem" && (
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-red-50/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border-2 border-red-200">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-red-900 text-sm mb-1">Problème</p>
                            <p className="text-xs text-red-700">3 appels entrants, demandes multiples, manque de temps</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content section */}
                <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-white to-gray-50/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.iconBg} shadow-md`}>
                      <step.icon className={`h-6 w-6 bg-gradient-to-br ${step.iconColor} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-3xl p-10 md:p-12 shadow-2xl max-w-5xl mx-auto animate-slide-up delay-400">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-5xl font-bold">100%</div>
              <p className="text-blue-100 font-medium">Appels traités</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">-60%</div>
              <p className="text-blue-100 font-medium">Déplacements inutiles</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">+40%</div>
              <p className="text-blue-100 font-medium">Chiffre d'affaires</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-slide-up delay-500">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Découvrir comment ça marche
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
