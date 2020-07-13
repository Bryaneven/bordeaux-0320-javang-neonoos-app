import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'neo-progbar',
  templateUrl: './progbar.component.html',
  styleUrls: ['./progbar.component.scss']
})
export class ProgbarComponent implements OnInit {

  loading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
  }

}
