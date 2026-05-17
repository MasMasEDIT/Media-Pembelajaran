import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Languages,
  Volume2,
  CheckCircle2,
  XCircle,
  Trophy,
  RefreshCw,
  Search,
  ClipboardList,
  Star,
  PlayCircle,
  Home,
  PenLine,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    id: 1,
    title: "التعارف",
    subtitle: "Perkenalan Diri",
    level: "Kelas X",
    theme: "Komunikasi dasar",
    description:
      "Siswa mempelajari ungkapan perkenalan, identitas diri, asal, dan sapaan sederhana dalam Bahasa Arab.",
    objectives: [
      "Menyebutkan nama, asal, dan kelas dalam Bahasa Arab.",
      "Menggunakan sapaan formal dan nonformal secara tepat.",
      "Menyusun dialog pendek tentang perkenalan diri.",
    ],
    vocab: [
      { arabic: "اِسْمِي", latin: "ismii", meaning: "nama saya" },
      { arabic: "أَنَا مِنْ", latin: "anaa min", meaning: "saya dari" },
      { arabic: "طَالِبٌ", latin: "thaalibun", meaning: "siswa laki-laki" },
      { arabic: "طَالِبَةٌ", latin: "thaalibatun", meaning: "siswa perempuan" },
      { arabic: "مَدْرَسَةٌ", latin: "madrasatun", meaning: "sekolah" },
      { arabic: "صَدِيقٌ", latin: "shadiiqun", meaning: "teman" },
    ],
    example:
      "السَّلَامُ عَلَيْكُمْ، اِسْمِي أَحْمَدُ. أَنَا طَالِبٌ فِي الْمَدْرَسَةِ الْعَالِيَةِ.",
    translation:
      "Assalamu’alaikum, nama saya Ahmad. Saya adalah siswa di Madrasah Aliyah.",
  },
  {
    id: 2,
    title: "الحياة اليومية",
    subtitle: "Kegiatan Sehari-hari",
    level: "Kelas XI",
    theme: "Rutinitas dan waktu",
    description:
      "Siswa memahami kosakata kegiatan harian, waktu, dan susunan kalimat sederhana untuk menjelaskan rutinitas.",
    objectives: [
      "Mengidentifikasi mufradat kegiatan sehari-hari.",
      "Menjelaskan rutinitas menggunakan fi'il mudhari'.",
      "Membuat paragraf pendek tentang aktivitas harian.",
    ],
    vocab: [
      { arabic: "أَسْتَيْقِظُ", latin: "astaiqizhu", meaning: "saya bangun" },
      { arabic: "أَذْهَبُ", latin: "adzhabu", meaning: "saya pergi" },
      { arabic: "أَدْرُسُ", latin: "adrusu", meaning: "saya belajar" },
      { arabic: "أَرْجِعُ", latin: "arji'u", meaning: "saya pulang" },
      { arabic: "صَبَاحًا", latin: "shabaahan", meaning: "pagi hari" },
      { arabic: "مَسَاءً", latin: "masaa'an", meaning: "sore/malam hari" },
    ],
    example:
      "أَسْتَيْقِظُ صَبَاحًا، ثُمَّ أَذْهَبُ إِلَى الْمَدْرَسَةِ.",
    translation: "Saya bangun pagi, kemudian pergi ke sekolah.",
  },
  {
    id: 3,
    title: "الهوايات",
    subtitle: "Hobi dan Minat",
    level: "Kelas XII",
    theme: "Ekspresi minat",
    description:
      "Siswa mempelajari cara menyatakan hobi, minat, alasan, dan pendapat sederhana dalam Bahasa Arab.",
    objectives: [
      "Menyebutkan jenis hobi dalam Bahasa Arab.",
      "Menggunakan ungkapan suka dan tidak suka.",
      "Menyampaikan alasan sederhana atas pilihan hobi.",
    ],
    vocab: [
      { arabic: "هِوَايَةٌ", latin: "hiwaayatun", meaning: "hobi" },
      { arabic: "أُحِبُّ", latin: "uhibbu", meaning: "saya suka" },
      { arabic: "الْقِرَاءَةُ", latin: "al-qiraa'ah", meaning: "membaca" },
      { arabic: "الرِّيَاضَةُ", latin: "ar-riyaadhah", meaning: "olahraga" },
      { arabic: "الرَّسْمُ", latin: "ar-rasmu", meaning: "menggambar" },
      { arabic: "مُفِيدٌ", latin: "mufiidun", meaning: "bermanfaat" },
    ],
    example: "أُحِبُّ الْقِرَاءَةَ لِأَنَّهَا مُفِيدَةٌ.",
    translation: "Saya suka membaca karena membaca itu bermanfaat.",
  },
];

const quizBank = [
  {
    question: "Arti kata اِسْمِي adalah ...",
    options: ["nama saya", "rumah saya", "sekolah saya", "teman saya"],
    answer: "nama saya",
    lessonId: 1,
  },
  {
    question: "Kalimat أَنَا مِنْ berarti ...",
    options: ["saya pergi", "saya dari", "saya belajar", "saya suka"],
    answer: "saya dari",
    lessonId: 1,
  },
  {
    question: "أَدْرُسُ memiliki arti ...",
    options: ["saya makan", "saya membaca", "saya belajar", "saya pulang"],
    answer: "saya belajar",
    lessonId: 2,
  },
  {
    question: "Kata yang berarti pagi hari adalah ...",
    options: ["مَسَاءً", "صَبَاحًا", "طَالِبٌ", "هِوَايَةٌ"],
    answer: "صَبَاحًا",
    lessonId: 2,
  },
  {
    question: "أُحِبُّ الْقِرَاءَةَ berarti ...",
    options: [
      "saya suka membaca",
      "saya suka olahraga",
      "saya pergi sekolah",
      "saya bangun pagi",
    ],
    answer: "saya suka membaca",
    lessonId: 3,
  },
  {
    question: "هِوَايَةٌ berarti ...",
    options: ["kegiatan", "hobi", "kelas", "teman"],
    answer: "hobi",
    lessonId: 3,
  },
];

const speakingTasks = [
  "Perkenalkan diri Anda dalam 3 kalimat Bahasa Arab.",
  "Ceritakan kegiatan pagi Anda menggunakan minimal 4 mufradat.",
  "Sebutkan satu hobi dan alasan mengapa Anda menyukainya.",
];

function pronounce(text) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ar-SA";
  utterance.rate = 0.8;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export default function ArabicLearningApp() {
  const [activeLessonId, setActiveLessonId] = useState(1);
  const [screen, setScreen] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [completed, setCompleted] = useState(false);

  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId) || lessons[0];

  const filteredVocab = useMemo(() => {
    const all = lessons.flatMap((lesson) =>
      lesson.vocab.map((item) => ({ ...item, lessonTitle: lesson.subtitle, lessonId: lesson.id }))
    );
    if (!searchTerm.trim()) return all;
    const keyword = searchTerm.toLowerCase();
    return all.filter(
      (item) =>
        item.arabic.includes(searchTerm) ||
        item.latin.toLowerCase().includes(keyword) ||
        item.meaning.toLowerCase().includes(keyword) ||
        item.lessonTitle.toLowerCase().includes(keyword)
    );
  }, [searchTerm]);

  const currentQuiz = quizBank[quizIndex];
  const progressPercentage = Math.round(((quizIndex + (answered ? 1 : 0)) / quizBank.length) * 100);

  function handleAnswer(option) {
    if (answered) return;
    setSelectedAnswer(option);
    setAnswered(true);
    if (option === currentQuiz.answer) setScore((prev) => prev + 1);
  }

  function nextQuestion() {
    if (quizIndex + 1 >= quizBank.length) {
      setCompleted(true);
      return;
    }
    setQuizIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setAnswered(false);
  }

  function resetQuiz() {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setCompleted(false);
  }

  const finalScore = Math.round((score / quizBank.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-emerald-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-100">
              <Languages className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight md:text-2xl">Arabiyah MA</h1>
              <p className="text-sm text-slate-500">Media Pembelajaran Bahasa Arab Madrasah Aliyah</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2">
            {[
              { id: "home", label: "Beranda", icon: Home },
              { id: "materi", label: "Materi", icon: BookOpen },
              { id: "mufradat", label: "Mufradat", icon: Star },
              { id: "latihan", label: "Latihan", icon: PenLine },
              { id: "kuis", label: "Kuis", icon: ClipboardList },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={screen === item.id ? "default" : "outline"}
                  className={
                    screen === item.id
                      ? "rounded-2xl bg-emerald-700 hover:bg-emerald-800"
                      : "rounded-2xl border-emerald-100 bg-white hover:bg-emerald-50"
                  }
                  onClick={() => setScreen(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {screen === "home" && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]"
          >
            <Card className="overflow-hidden rounded-3xl border-0 bg-emerald-800 text-white shadow-xl shadow-emerald-100">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-emerald-50">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Untuk kelas X, XI, dan XII Madrasah Aliyah
                </div>
                <h2 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
                  Belajar Bahasa Arab lebih aktif, kontekstual, dan terukur.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50 md:text-lg">
                  Aplikasi ini dirancang sebagai media pembelajaran berbasis digital yang memadukan materi,
                  mufradat, contoh kalimat, latihan berbicara, dan kuis evaluatif untuk mendukung pembelajaran
                  Bahasa Arab di Madrasah Aliyah.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    className="rounded-2xl bg-amber-400 px-6 text-slate-900 hover:bg-amber-300"
                    onClick={() => setScreen("materi")}
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Mulai Belajar
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-2xl border-white/30 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"
                    onClick={() => setScreen("kuis")}
                  >
                    Coba Kuis
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {[
                { label: "Paket Materi", value: "3", note: "Topik inti MA" },
                { label: "Mufradat", value: "18", note: "Kosakata dasar" },
                { label: "Soal Kuis", value: "6", note: "Evaluasi cepat" },
              ].map((item) => (
                <Card key={item.label} className="rounded-3xl border-emerald-100 bg-white shadow-sm">
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <p className="mt-1 text-4xl font-extrabold text-emerald-800">{item.value}</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                      {item.note}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {screen === "materi" && (
          <section className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Daftar Materi</h2>
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setActiveLessonId(lesson.id)}
                  className={`w-full rounded-3xl border p-5 text-left transition ${
                    activeLessonId === lesson.id
                      ? "border-emerald-600 bg-emerald-700 text-white shadow-lg shadow-emerald-100"
                      : "border-emerald-100 bg-white hover:bg-emerald-50"
                  }`}
                >
                  <p className="text-sm font-semibold opacity-80">{lesson.level}</p>
                  <p className="mt-1 text-2xl font-bold" dir="rtl">
                    {lesson.title}
                  </p>
                  <p className="mt-1 text-sm">{lesson.subtitle}</p>
                </button>
              ))}
            </div>

            <motion.div
              key={activeLesson.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Card className="rounded-3xl border-emerald-100 bg-white shadow-sm">
                <CardContent className="p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                        {activeLesson.level} • {activeLesson.theme}
                      </p>
                      <h2 className="mt-2 text-4xl font-extrabold" dir="rtl">
                        {activeLesson.title}
                      </h2>
                      <p className="mt-1 text-xl font-semibold text-slate-700">{activeLesson.subtitle}</p>
                    </div>
                    <Button
                      className="rounded-2xl bg-emerald-700 hover:bg-emerald-800"
                      onClick={() => pronounce(activeLesson.example)}
                    >
                      <Volume2 className="mr-2 h-4 w-4" />
                      Dengarkan Contoh
                    </Button>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">{activeLesson.description}</p>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {activeLesson.objectives.map((objective, index) => (
                      <div key={objective} className="rounded-3xl bg-emerald-50 p-5">
                        <p className="text-sm font-bold text-emerald-700">Tujuan {index + 1}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">{objective}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-3xl bg-slate-50 p-6">
                    <p className="text-sm font-bold text-slate-500">Contoh Kalimat</p>
                    <p className="mt-3 text-right text-3xl font-bold leading-relaxed text-slate-900" dir="rtl">
                      {activeLesson.example}
                    </p>
                    <p className="mt-3 text-slate-600">{activeLesson.translation}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        )}

        {screen === "mufradat" && (
          <section>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Bank Mufradat</h2>
                <p className="mt-1 text-slate-500">Cari kosakata berdasarkan Arab, latin, arti, atau topik materi.</p>
              </div>
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari mufradat..."
                  className="w-full rounded-2xl border border-emerald-100 bg-white py-3 pl-12 pr-4 outline-none ring-emerald-200 focus:ring-4"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVocab.map((item) => (
                <Card key={`${item.lessonId}-${item.arabic}`} className="rounded-3xl border-emerald-100 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-emerald-700">{item.lessonTitle}</p>
                        <p className="mt-3 text-4xl font-extrabold" dir="rtl">
                          {item.arabic}
                        </p>
                        <p className="mt-2 text-slate-500">/{item.latin}/</p>
                        <p className="mt-3 text-lg font-semibold text-slate-800">{item.meaning}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-2xl border-emerald-100"
                        onClick={() => pronounce(item.arabic)}
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {screen === "latihan" && (
          <section className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
            <Card className="rounded-3xl border-emerald-100 bg-white shadow-sm">
              <CardContent className="p-7">
                <h2 className="text-2xl font-bold">Latihan Menulis</h2>
                <p className="mt-2 leading-7 text-slate-600">
                  Gunakan contoh berikut sebagai model. Siswa dapat menulis ulang, mengganti nama,
                  mengganti asal daerah, atau menambahkan keterangan kelas.
                </p>
                <div className="mt-6 rounded-3xl bg-amber-50 p-6">
                  <p className="text-right text-3xl font-bold leading-relaxed" dir="rtl">
                    اِسْمِي فَاطِمَةُ. أَنَا طَالِبَةٌ فِي الصَّفِّ الْعَاشِرِ. أَنَا مِنْ إِنْدُونِيسِيَا.
                  </p>
                  <p className="mt-4 text-slate-700">
                    Nama saya Fatimah. Saya siswi kelas sepuluh. Saya dari Indonesia.
                  </p>
                </div>
                <div className="mt-6 rounded-3xl border border-dashed border-emerald-200 bg-emerald-50 p-6">
                  <p className="font-bold text-emerald-800">Tugas Siswa</p>
                  <p className="mt-2 text-slate-700">
                    Buat 5 kalimat Bahasa Arab tentang identitas diri dan kegiatan harian.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-emerald-100 bg-white shadow-sm">
              <CardContent className="p-7">
                <h2 className="text-2xl font-bold">Latihan Berbicara</h2>
                <p className="mt-2 text-slate-600">Pilih satu instruksi, lalu praktikkan secara lisan di depan kelas.</p>
                <div className="mt-6 space-y-4">
                  {speakingTasks.map((task, index) => (
                    <div key={task} className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-sm font-bold text-emerald-700">Latihan {index + 1}</p>
                      <p className="mt-2 leading-7 text-slate-700">{task}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-3xl bg-slate-900 p-5 text-white">
                  <p className="font-bold">Rubrik Singkat</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    <li>• Ketepatan mufradat dan struktur kalimat</li>
                    <li>• Kelancaran pengucapan</li>
                    <li>• Keberanian dan kejelasan suara</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {screen === "kuis" && (
          <section className="mx-auto max-w-3xl">
            <Card className="rounded-3xl border-emerald-100 bg-white shadow-lg shadow-emerald-100/60">
              <CardContent className="p-7">
                {!completed ? (
                  <>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-emerald-700">
                          Soal {quizIndex + 1} dari {quizBank.length}
                        </p>
                        <h2 className="mt-1 text-2xl font-bold">Kuis Pemahaman</h2>
                      </div>
                      <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                        Skor: {score}
                      </div>
                    </div>

                    <div className="mb-6 h-3 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-emerald-700 transition-all"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>

                    <div className="rounded-3xl bg-slate-50 p-6">
                      <p className="text-xl font-bold leading-8">{currentQuiz.question}</p>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {currentQuiz.options.map((option) => {
                        const isCorrect = option === currentQuiz.answer;
                        const isSelected = selectedAnswer === option;
                        const showCorrect = answered && isCorrect;
                        const showWrong = answered && isSelected && !isCorrect;
                        return (
                          <button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            className={`flex items-center justify-between rounded-2xl border p-4 text-left font-medium transition ${
                              showCorrect
                                ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                                : showWrong
                                ? "border-red-500 bg-red-50 text-red-700"
                                : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50"
                            }`}
                          >
                            <span>{option}</span>
                            {showCorrect && <CheckCircle2 className="h-5 w-5" />}
                            {showWrong && <XCircle className="h-5 w-5" />}
                          </button>
                        );
                      })}
                    </div>

                    {answered && (
                      <div className="mt-6 flex flex-col gap-3 rounded-3xl bg-amber-50 p-5 md:flex-row md:items-center md:justify-between">
                        <p className="font-medium text-slate-700">
                          {selectedAnswer === currentQuiz.answer
                            ? "Jawaban benar. Lanjutkan ke soal berikutnya."
                            : `Jawaban belum tepat. Jawaban benar: ${currentQuiz.answer}`}
                        </p>
                        <Button className="rounded-2xl bg-emerald-700 hover:bg-emerald-800" onClick={nextQuestion}>
                          {quizIndex + 1 >= quizBank.length ? "Lihat Hasil" : "Soal Berikutnya"}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-100 text-amber-700">
                      <Trophy className="h-10 w-10" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold">Hasil Kuis</h2>
                    <p className="mt-2 text-slate-500">Anda menjawab {score} dari {quizBank.length} soal dengan benar.</p>
                    <p className="mt-6 text-6xl font-extrabold text-emerald-800">{finalScore}</p>
                    <p className="mt-2 font-semibold text-slate-600">Nilai Akhir</p>
                    <div className="mx-auto mt-6 max-w-md rounded-3xl bg-slate-50 p-5 text-left">
                      <p className="font-bold">Rekomendasi Belajar</p>
                      <p className="mt-2 leading-7 text-slate-600">
                        {finalScore >= 80
                          ? "Pemahaman sudah baik. Lanjutkan ke latihan berbicara dan menulis paragraf pendek."
                          : finalScore >= 60
                          ? "Pemahaman cukup. Ulangi mufradat dan contoh kalimat pada materi yang belum dikuasai."
                          : "Perlu penguatan. Pelajari ulang materi dasar, terutama arti mufradat dan pola kalimat sederhana."}
                      </p>
                    </div>
                    <Button className="mt-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800" onClick={resetQuiz}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Ulangi Kuis
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}
