import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderCenterComponent } from './header-center/header-center.component';

@NgModule({
  declarations: [HeaderComponent, HeaderMenuComponent, HeaderCenterComponent],
  exports: [HeaderComponent, HeaderMenuComponent, HeaderCenterComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
