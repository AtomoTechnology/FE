import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {

  constructor(private titleService: Title, private router: Router,
    private activatedRoute: ActivatedRoute, private primengConfig: PrimeNGConfig){}

      setDocTitle(title: string) {
        this.titleService.setTitle(title);
      }

    ngOnInit() {
      this.primengConfig.ripple = true;
      const appTitle = this.titleService.getTitle();
      this.router
        .events.pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => {
            let child = this.activatedRoute.firstChild!;
            while (child.firstChild) {
              child = child.firstChild;
            }
            if (child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            }
            return appTitle;
          })
        ).subscribe((ttl: string) => {
          this.titleService.setTitle("Yuyu - "+ ttl);
        });
    }
}
