import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

    ngOnInit() {
        if (typeof document !== 'undefined') {
          const text = "I am a 3rd year Bachelor of Science in Information Technology (BSIT) student with a passion for technology and innovation. With hands-on experience in Data Analysis, Web Development, Software Development, and Project Management, I have developed a well-rounded skill set to tackle various challenges in the tech industry.\n\nI enjoy translating complex problems into streamlined solutions, whether it's through crafting efficient software, building responsive websites, or managing projects from concept to completion. I'm always eager to learn, grow, and apply my skills to real-world projects.";
          const typingTextElement = document.getElementById('typing-text');
          const additionalContent = document.getElementById('additional-content');
          let index = 0;
      
          function type() {
            if (index < text.length) {
              if (text.charAt(index) === '\n') {
                typingTextElement!.innerHTML += '<br>';
              } else {
                typingTextElement!.innerHTML += text.charAt(index);
              }
              index++;
              setTimeout(type, 10);
            } else {
              additionalContent!.style.display = 'block';
            }
          }
      
          type();
        }
      }
      

}
