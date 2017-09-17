"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var pun_service_1 = require("../services/pun.service");
var PunsComponent = (function () {
    function PunsComponent(puns) {
        var _this = this;
        this.puns = puns;
        this.keywordInputChange$ = new Subject_1.Subject();
        this.keyword$ = this.keywordInputChange$
            .switchMap(function (partial) { return _this.puns.suggestKeywords(partial); })
            .share();
        this.pun$ = this.keyword$
            .switchMap(function (keywords) { return _this.puns.getPuns(keywords); });
    }
    PunsComponent.prototype.ngOnInit = function () {
    };
    PunsComponent = __decorate([
        core_1.Component({
            selector: "ns-puns",
            moduleId: module.id,
            templateUrl: "./puns.component.html",
        }),
        __metadata("design:paramtypes", [pun_service_1.PunService])
    ], PunsComponent);
    return PunsComponent;
}());
exports.PunsComponent = PunsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdW5zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCx3Q0FBdUM7QUFDdkMsdURBQXFEO0FBT3JEO0lBV0ksdUJBQ1ksSUFBZ0I7UUFENUIsaUJBRUs7UUFETyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBVjVCLHdCQUFtQixHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBRTVDLGFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CO2FBQzlCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFsQyxDQUFrQyxDQUFDO2FBQ3hELEtBQUssRUFBRSxDQUFDO1FBRWIsU0FBSSxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ2YsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUlwRCxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFqQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0Fhb0Isd0JBQVU7T0FabkIsYUFBYSxDQWtCekI7SUFBRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IFB1blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wdW4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXB1bnNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHVucy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQdW5zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGtleXdvcmRJbnB1dENoYW5nZSQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgICBrZXl3b3JkJCA9IHRoaXMua2V5d29yZElucHV0Q2hhbmdlJFxuICAgICAgICAuc3dpdGNoTWFwKHBhcnRpYWwgPT4gdGhpcy5wdW5zLnN1Z2dlc3RLZXl3b3JkcyhwYXJ0aWFsKSlcbiAgICAgICAgLnNoYXJlKCk7XG4gICAgXG4gICAgcHVuJCA9IHRoaXMua2V5d29yZCRcbiAgICAgICAgLnN3aXRjaE1hcChrZXl3b3JkcyA9PiB0aGlzLnB1bnMuZ2V0UHVucyhrZXl3b3JkcykpO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHB1bnM6IFB1blNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG59XG4iXX0=