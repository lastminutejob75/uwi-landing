import React from "react";
import { Calendar, RefreshCw, TrendingUp, AlertCircle, CheckCircle, X, ArrowRight } from "lucide-react";

export default function CancellationManagementSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Heures de pointe",
      description: "Appels ignorés, annulations de RDV, « no-shows » des clients",
      impact: "Appels ignorés, TPE défliés",
      color: "red",
    },
  ];

  const solutions = [
    {
      icon: RefreshCw,
      title: "Relance Automatique",
      description: "UWI recontacte et propose un créneau libre à chaque annulation",
      detail: "Nouveau créneau : Votre RDV annulé 17:45 a été replanifié demain 11:30.",
      color: "green",
      image: "/images/cancellation-auto-rebook.jpg",
    },
    {
      icon: TrendingUp,
      title: "Planning Rempli",
      description: "Clients recontactés, calendrier optimisé, taux de remplissage maximal",
      detail: "Clients recontactés, calendrier optimisé",
      color: "blue",
      image: "/images/cancellation-optimized.jpg",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Gestion Intelligente
          </div>
          <h2 className="heading-lg mb-4">
            <span className="text-[#0066CC]">UWI</span> Réduit vos Annulations et Remplit Votre Planning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ne perdez plus de temps ni d'argent avec les créneaux vides et les annulations de dernière minute
          </p>

          {/* Icons flow */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
              <Calendar className="h-7 w-7 text-red-600" />
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <RefreshCw className="h-7 w-7 text-green-600" />
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <TrendingUp className="h-7 w-7 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Problem */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 h-full border-2 border-red-200">
              {/* Image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-red-200 to-red-300 rounded-xl mb-6 overflow-hidden">
                <img
                  src="/images/cancellation-problem.jpg"
                  alt="Problème annulations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Overlay badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-3 shadow-lg">
                  <AlertCircle className="h-6 w-6" />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-red-200">
                <div className="flex items-start gap-3 mb-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Heures de pointe</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Appels ignorés, annulations de RDV, « no-shows » des clients
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-red-200">
                  <p className="text-xs text-red-700 font-medium flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Appels ignorés, TPE défliés
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 1 - Auto rebook */}
          <div className="animate-slide-up delay-100">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full border-2 border-green-300 shadow-lg">
              {/* Image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-green-200 to-green-300 rounded-xl mb-6 overflow-hidden">
                <img
                  src={solutions[0].image}
                  alt={solutions[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Phone mockup overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs transform hover:scale-105 transition-transform">
                    <div className="bg-green-50 rounded-lg p-3 mb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <RefreshCw className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-xs">UWI</span>
                      </div>
                      <p className="text-xs font-medium text-gray-900">Nouveau créneau :</p>
                      <p className="text-xs text-gray-700 mt-1">
                        Votre RDV annulé 17:45 a été replanifié demain 11:30.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-500 text-white text-xs py-2 rounded-lg font-medium">
                        ✓ Confirmer
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 rounded-lg font-medium">
                        Autre heure
                      </button>
                    </div>
                  </div>
                </div>

                {/* Overlay badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-green-200">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Relance Automatique</p>
                    <p className="text-sm text-gray-700">
                      UWI recontacte et propose un créneau libre à chaque annulation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 2 - Optimized planning */}
          <div className="animate-slide-up delay-200">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full border-2 border-blue-300 shadow-lg">
              {/* Image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl mb-6 overflow-hidden">
                <img
                  src={solutions[1].image}
                  alt={solutions[1].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Happy customer illustration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <TrendingUp className="h-32 w-32 text-blue-600" />
                </div>

                {/* Overlay badge */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-blue-200">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Planning Rempli</p>
                    <p className="text-sm text-gray-700">
                      Clients recontactés, calendrier optimisé, taux de remplissage maximal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl max-w-6xl mx-auto mb-12 animate-slide-up delay-300">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">-80%</div>
              <p className="text-blue-100">d'annulations non gérées</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+35%</div>
              <p className="text-blue-100">de taux de remplissage</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">des créneaux optimisés</p>
            </div>
          </div>
        </div>

        {/* Bottom summary badges */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-slide-up delay-400">
          <div className="bg-white rounded-xl p-5 shadow-soft border-2 border-red-100 hover:border-red-300 transition-all duration-300 group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm mb-1">Heures de pointe</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Appels ignorés, annulations de RDV, « no-shows » des clients
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-soft border-2 border-green-100 hover:border-green-300 transition-all duration-300 group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                <RefreshCw className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm mb-1">Relance Automatique</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  UWI recontacte et propose un créneau libre à chaque annulation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-soft border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm mb-1">Planning Rempli</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Clients recontactés, calendrier optimisé, taux de remplissage maximal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-slide-up delay-500">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
          >
            Optimiser mon planning
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Réduisez vos pertes et maximisez votre chiffre d'affaires
          </p>
        </div>
      </div>
    </section>
  );
}
