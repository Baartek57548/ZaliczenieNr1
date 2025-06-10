import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Heart, Share2, Search, MoreHorizontal, MapPin, Phone, Mail, Globe, Star } from "lucide-react"

export default function KaliopPolandProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Banner */}
          <div className="relative h-48 md:h-64 -mx-4 mb-4">
            <Image
              src="/images/hero-banner.jpg"
              alt="Kaliop Poland - Delivering digital value for people"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Profile Section */}
          <div className="pb-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                {/* Logo */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 -mt-12 md:-mt-16 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-2xl">K</div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Kaliop Poland</h1>
                  <p className="text-gray-600 mt-1">403 polubienia • 458 obserwujący</p>

                  {/* Follower Avatars */}
                  <div className="flex -space-x-2 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Wyślij wiadomość
                </Button>
                <Button variant="outline" className="px-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Lubisz to
                </Button>
                <Button variant="outline" size="icon">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-6 mt-6 border-b">
              <button className="pb-3 px-1 border-b-2 border-blue-600 text-blue-600 font-medium">Posty</button>
              <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">Informacje</button>
              <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">Wzmianki</button>
              <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">Opinie</button>
              <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">Obserwujący</button>
              <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">Zdjęcia</button>
              <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">Więcej</button>
              <button className="ml-auto pb-3 px-1">
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Company Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Prezentacja</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Dostawca rozwiązań IT dla biznesu. 20 lat doświadczeń na rynku, setki zrealizowanych projektów.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Strona • Usługi biznesowe</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Portowa 13B, Słupskie, Poland</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">59 841 37 14</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">biuro@kaliop.pl</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <a href="#" className="text-blue-600 hover:underline">
                      kaliop.pl
                    </a>
                  </div>
                </div>

                <Separator className="my-4" />

                <button className="text-blue-600 hover:underline text-sm font-medium">Promuj witrynę</button>

                <Separator className="my-4" />

                <div className="flex items-center gap-3 text-sm">
                  <Star className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Zamknięte teraz</span>
                </div>

                <div className="flex items-center gap-3 text-sm mt-2">
                  <Star className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Jeszcze nie oceniono (0 opinii)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Posts */}
          <div className="lg:col-span-2">
            {/* Admin Notice */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Przełącz na stronę Kaliop Poland, aby zacząć nią zarządzać.
                    </span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Przełącz teraz
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Section */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Posty</h2>
              <Button variant="outline" size="sm">
                Filtry
              </Button>
            </div>

            {/* Sample Post */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Kaliop Poland</span>
                      <span className="text-sm text-gray-500">21 czerwca o 08:01</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-gray-800 mb-4">
                  Kolejna spotkania Rady Pracowników w Instytucie Nauk Społecznych Technicznych za nami! 
                  <br />
                  Rozmawialiśmy o naszej działalności w ramach najnowszych technologii. 🚀 Jest to działanie
                  długoterminowe, ale już możemy wyjaśnić za wiele.
                  <br />
                  Trzymamy kciuki, żeby nadszedł moment, gdzie możesz z nam będą wszyscy. 
                </p>

                {/* Post Image */}
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Office interior"
                    width={500}
                    height={300}
                    className="rounded-lg w-full object-cover"
                  />
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">Lubię to</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">Komentarz</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm">Udostępnij</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
