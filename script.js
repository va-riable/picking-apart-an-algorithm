
const messages = [
    
"  /c/ Tabla Virtuoso in Concert: A Mesmerizing Evening of Rhythm and Music  ",
"  /c/ Tabla and Sitar Duet: A Live Classical Music Experience  ",
"  /c/ Tabla Fusion Concert: Blending Tradition with Modern Beats in Music  ",
"  /c/ Tabla Masters in Concert: An Unforgettable Music Journey  ",
"  /c/ Raga on Tabla and Flute: Captivating Indian Classical Music Concert  ",
"  /c/ Tabla Symphony: A Grand Music Concert with Harmonium and Sarangi  ",
"  /c/ Soulful Tabla Recital: Live Concert of Rhythmic Music Excellence  ",
"  /c/ Tabla Maestro Live: An Evening of Classical Indian Music and Rhythm  ",
"  /c/ Tabla and Vocal Harmony: A Live Concert of Melody and Music Beat  ",
"  /c/ Epic Tabla and Veena Concert: An Indian Classical Music Journey  ",
"  /c/ Tabla Ensemble Concert: Rhythms of Indian Music Live Performance  ",
"  /c/ Tabla and Mridangam Duo: South Meets North in Live Music Fusion  ",
"  /t/ Mastering the Tabla: A Beginner’s Guide to Indian Music Rhythms  ",
"  /t/ Tabla Basics: Essential Techniques and Patterns for Music Beginners  ",
"  /t/ The Art of Tabla Playing: A Step-by-Step Music Tutorial  ",
"  /t/ Exploring Tabla Rhythms: A Comprehensive Music Guide for All Levels  ",
"  /t/ Tabla 101: Understanding the Language of Indian Music Drumming  ",
"  /t/ The History and Evolution of Tabla in Music: A Video Essay  ",
"  /t/ Tabla for Beginners: Learn the Key Music Strokes and Patterns  ",
"  /t/ Inside the Tabla: Anatomy, History, and Cultural Significance in Music  ",
"  /t/ Advanced Tabla Techniques: Tips and Tricks for Music Enthusiasts  ",
"  /t/ Exploring Indian Rhythms: The Role of Tabla in Classical Music  ",
"  /t/ Tabla Tuning Tutorial: Achieve Perfect Pitch and Music Quality  ",
"  /t/ Unlocking Complex Tabla Beats: A Guide to Advanced Music Rhythms  ",
"  /t/ Tabla vs. Mridangam: A Comparison of Two Indian Music Percussion Legends  "
  ];

  
  function fillResults() {
   
    const shuffledMessages = messages.sort(() => 0.5 - Math.random());
    const selectedMessages = shuffledMessages.slice(0, 5);

    
    for (let i = 0; i < 5; i++) {
      document.getElementById(`r${i+1}`).innerText = selectedMessages[i];
    }
  }

