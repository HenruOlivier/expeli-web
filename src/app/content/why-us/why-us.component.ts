import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';
import { ToggleInViewDirective } from '../../shared/directives/toggleInViewClass';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [TypingEffectDirective, ToggleInViewDirective],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {

}
