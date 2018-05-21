import { Component, OnInit, Input } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";
import { AppriseService } from "../../../../_services/internal/apprise.service";

@Component({
  selector: 'doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.css']
})
export class DocViewComponent implements OnInit {
  private docCache: any;

  private niceway: DocCache[] = [{
    id: 1,
    data: ""
  }]
  private _DocID: string;
  currentHoveredDoc: string = null;
  currentViewDocID = 0;
  get docId(): string {
    // transform value for display
    return this._DocID;
  }

  @Input()
  set docId(docid: string) {
    this._DocID = docid;
  }
  constructor(private _http: coreHTTP, private _apprise: AppriseService) { }

  ngOnInit() {
  }


  mouseEnter() {
    if (this.docCache != this._DocID) {
      this.docCache = this._DocID;
      this.getDocToView();
    }

  }

  getDocToView() {

    this._http.get('api/Document/GetDocImage?docId=' + this._DocID).subscribe(
      (response: any) => {
        if (response.Data.length > 0) {
          let baseline = "data:image/png;base64,"
          this.currentHoveredDoc = baseline + response.Data[0].m_Item2;
        }
        else { this._apprise.notitfyWarning('No Image Found!!'); }
      },
      (error) => console.log(error),
      () => console.log('complete getDocToView')
    );
  }

  mouseLeave() {
    // this.currentHoveredDoc = "";
  }

  closeDoc() {
    this.docCache = 0;
    this.currentHoveredDoc = null;
  }

}
export class DocCache {
  id: number;
  data: string
}