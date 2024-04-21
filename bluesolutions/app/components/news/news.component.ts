import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  articles = [
    {
      title: 'Pampanga River basin has emerging contaminants',
      content: 'The Pampanga River basin is experiencing the presence of emerging contaminants, substances that are newly recognized or are increasingly being detected in the environment. These contaminants pose potential risks to water quality and ecosystems in the region.',
      publishedDate: new Date(),
      imageUrl: 'https://www.wateroam.com/uploads/2/8/6/0/28600353/editor/clean-drinking-water.jpg?1603706525'
    },
    {
      title: 'Tens of thousands of Angeles City consumers slam woes under Primewater',
      content: 'Tens of thousands of consumers in Angeles City are expressing dissatisfaction with Primewater, citing various issues and challenges they face with the water service provider.',
      publishedDate: new Date(),
      imageUrl: 'https://www.bgs.ac.uk/wp-content/uploads/2021/05/PumpingWater.jpg'
    },
    {
      title: 'DENR-EMB to conduct air, water tests on 2 Pampanga steel plants',
      content: 'The Department of Environment and Natural Resources - Environmental Management Bureau (DENR-EMB) is set to conduct air and water quality tests on two steel plants in Pampanga.',
      publishedDate: new Date(),
      imageUrl: 'https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2023/03/23/10536021_1.jpg?VersionId=lTrZfEeOFHHHPecpn9t_L6RbOlgXh4Sd'
    }
    
  ];
}
