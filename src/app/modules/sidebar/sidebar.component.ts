import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { coreHTTP } from "../../libs/core/coreHTTP.service";
import { BrandStrings } from "../../Common/helper/brandStrings";
import { AppKeyStrings } from "../../Common/helper/appkeyStrings";
import { Router } from "@angular/router";


declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public currentBrand: string;
    public userRoleDetails: any = [];
    public currentUser: any = [];
    public allowedBrands: any[];
    allbrands: BrandStrings;
    constructor(private _http: coreHTTP, private _router: Router) {

    }

    ngOnInit() {
        this.validateUserForFirstTime();
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    validateUserForFirstTime() {
        // If User and Token Exists
        if (localStorage.getItem(AppKeyStrings.CURRENT_USER) != null && localStorage.getItem(AppKeyStrings.USER_TOKEN) != null) {
            this.currentUser = JSON.parse(localStorage.getItem(AppKeyStrings.CURRENT_USER));
            this.Initialize();
        }
        else {
            this._router.navigate["/login"];
        }
    }

    Initialize() {
        // Getting Allowed Brand For showing in Nav Bar
        if (localStorage.getItem(AppKeyStrings.ALLOWED_BRAND) == null)
            this.getAllowedBrands();
        else
            this.allowedBrands = JSON.parse(localStorage.getItem(AppKeyStrings.ALLOWED_BRAND));

        // Setting Default Brand    
        this.getCurrentOrDefaultBrand();

    }

    // ***************************************** Branding Manage ***************************
    // UI event
    onBrandChanged(brand: string) {
        this.setCurrentOrDefaultBrand(brand, false);
    }

    setCurrentOrDefaultBrand(brand: string, isCurrentSet: boolean) {
        if (brand == BrandStrings.BC)
            this.currentBrand = BrandStrings.BC;
        if (brand == BrandStrings.BCML)
            this.currentBrand = BrandStrings.BCML;
        if (brand == BrandStrings.DC)
            this.currentBrand = BrandStrings.DC;
        localStorage.setItem(AppKeyStrings.CURRENT_BRAND, this.currentBrand);
        if (!isCurrentSet)
            window.location.reload();
    }

    getCurrentOrDefaultBrand() {
        //TEMP TO SET DEFAULT BRNAD
        let brand = BrandStrings.DC;

        if (localStorage.getItem(AppKeyStrings.CURRENT_BRAND) != null) {
            brand = localStorage.getItem(AppKeyStrings.CURRENT_BRAND);
            this.setCurrentOrDefaultBrand(brand, true);
        }
        else {
            this.setCurrentOrDefaultBrand(brand, false);
        }
        console.log("sidenav.finalbrnad", this.currentBrand);
    }
    // ***************************************** Branding Manage ***************************

    getAllowedBrands() {
        let request = JSON.stringify({ username: this.currentUser._UserName, host: "asdas" });
        this._http.post('api/account/GetAllowedBrands', request).subscribe(
            (response: any) => {
                if (response.Data != [] && response.Data != []) {
                    this.allowedBrands = response.Data;
                    localStorage.setItem(AppKeyStrings.ALLOWED_BRAND, JSON.stringify(response.Data));
                }
                else {
                    this.allowedBrands = ["BodyCare Clinics", "Doctors Chambers"];
                }
            },
            (error) => this.allowedBrands = ["BodyCare Clinics", "Doctors Chambers", "Bodycare Medico Legal"],
            () => this.GetSystemUser()
        );
    }

    GetSystemUser() {
        this._http.get('api/account/GetSystemUser?username=' + this.currentUser._UserName).subscribe(
            (response: any) => {
                if (response) {
                    this.userRoleDetails = response.Data;
                    localStorage.setItem(AppKeyStrings.USER_ROLE_DETAILS, JSON.stringify(this.userRoleDetails));
                }
            },
            (error) => console.log(error),
            () => console.log('complete')
        );
    }


}
