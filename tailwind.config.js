/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx", 
    "./components/**/*.{js,jsx,ts,tsx}",
    // Saya tambahkan path lain dari file Anda sebelumnya, sesuaikan jika tidak perlu
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        poppins :['Poppins-Regular'], // Perbaikan typo dari 'ponppins'
        // Tambahkan bobot lain seperti ini (berdasarkan gambar):
        'poppins-medium': ['Poppins-Medium'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-bold': ['Poppins-Bold'],
        
        // --- RAILWAY ---
        'railway': ['Railway'],
        'railway-bold': ['Railway-Bold'],

        // --- INTER (jika diperlukan, sesuai gambar) ---
        'inter': ['Inter-Regular'],
        'inter-semibold': ['Inter-SemiBold'],
        'inter-bold': ['Inter-Bold'],
      }
    },
  },
  plugins: [],
}
