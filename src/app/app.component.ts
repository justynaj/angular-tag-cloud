import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TagItem } from "./tag.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public hasError = false;
  public tagList: TagItem[];

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.getTags();
  }

  private getTags(): void {
    this.getTagsJSON().subscribe(
      (data: TagItem[]) => {
        this.tagList = data;
      },
      () => {
        this.hasError = true;
      }
    );
  }

  private getTagsJSON(): Observable<any> {
    return this.http.get("assets/tags.json");
  }
}
