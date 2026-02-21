import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Basic } from "./basic/basic";
import { Datatypes } from "./datatypes/datatypes";
import { Standaloneexample } from "./standaloneexample/standaloneexample";
import { Lifecycle } from "./lifecycle/lifecycle";
import { Structuraldirectives } from "./structuraldirectives/structuraldirectives";
import { Attributedirective } from "./attributedirective/attributedirective";
import { Componentdirective } from "./componentdirective/componentdirective";
import { Parentoutputdecorator } from './parentoutputdecorator/parentoutputdecorator';
import { Bindingexample } from './bindingexample/bindingexample';
import { Groceryorderbindingproject } from "./groceryorderbindingproject/groceryorderbindingproject";
import { Hotelroombookingprojectbinding } from './hotelroombookingprojectbinding/hotelroombookingprojectbinding';
import { Inbuiltpipes } from './inbuiltpipes/inbuiltpipes';
import { Userdefinedpipes } from "./userdefinedpipes/userdefinedpipes";
import { Strongtypeexample } from "./strongtypeexample/strongtypeexample";
import { InterfaceExample } from "./interface-example/interface-example";
import { InterfaceExampleOne } from "./interface-example-one/interface-example-one";
import { InterfaceExampleTwo } from './interface-example-two/interface-example-two';
import { Interfacethree } from './interfacethree/interfacethree';
import { InterfaceExampleFour } from "./interface-example-four/interface-example-four";
import { InterfaceExampleFive } from "./interface-example-five/interface-example-five";
import { InterfaceExampleSix } from './interface-example-six/interface-example-six';
import { Encapsulationexampleone } from "./encapsulationexampleone/encapsulationexampleone";
import { Encapsulationexampletwo } from "./encapsulationexampletwo/encapsulationexampletwo";
import { Encapsulationexamplethree } from "./encapsulationexamplethree/encapsulationexamplethree";
import { Encapsulationexamplefour } from "./encapsulationexamplefour/encapsulationexamplefour";
import { Encapsulationexamplefive } from "./encapsulationexamplefive/encapsulationexamplefive";
import { Encapsulationexamplesix } from "./encapsulationexamplesix/encapsulationexamplesix";
import { Encapsulationexampleseven } from './encapsulationexampleseven/encapsulationexampleseven';
import { NestedCompParentProductComp } from './nested-comp-parent-product-comp/nested-comp-parent-product-comp';
import { ServiceOneComponentExample } from './service-one-component-example/service-one-component-example';
import { ServiceTwoComponentExample } from "./service-two-component-example/service-two-component-example";
import { ServiceThreeComponentExample } from "./service-three-component-example/service-three-component-example";
import { ServiceFourComponentExample } from "./service-four-component-example/service-four-component-example";
import { ServiceFiveComponentExample } from "./service-five-component-example/service-five-component-example";
import { Cabserviceproject } from "./cabserviceproject/cabserviceproject";
import { Sendercomponentdatasharinginservice } from "./sendercomponentdatasharinginservice/sendercomponentdatasharinginservice";
import { Receivercomponentdatasharinginservice } from "./receivercomponentdatasharinginservice/receivercomponentdatasharinginservice";
import { RxJsExample } from "./rx-js-example/rx-js-example";
import { RxJsExampleTwo } from "./rx-js-example-two/rx-js-example-two";
import { Rxjsapicomponentprojectexample } from "./rxjsapicomponentprojectexample/rxjsapicomponentprojectexample";
import { TemplateFormExample } from './template-form-example/template-form-example';
import { ReactiveFormExample } from "./reactive-form-example/reactive-form-example";
import { EmployeeComponent } from "./components/employee/employee";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Basic, Datatypes, Standaloneexample, Lifecycle, Structuraldirectives, Attributedirective, Componentdirective, Parentoutputdecorator, Bindingexample, Groceryorderbindingproject, Hotelroombookingprojectbinding, Inbuiltpipes, Userdefinedpipes, Strongtypeexample, InterfaceExample, InterfaceExampleOne, InterfaceExampleTwo, Interfacethree, InterfaceExampleFour, InterfaceExampleFive, InterfaceExampleSix, Encapsulationexampleone, Encapsulationexampletwo, Encapsulationexamplethree, Encapsulationexamplefour, Encapsulationexamplefive, Encapsulationexamplesix, Encapsulationexampleseven, NestedCompParentProductComp, ServiceOneComponentExample, ServiceTwoComponentExample, ServiceThreeComponentExample, ServiceFourComponentExample, ServiceFiveComponentExample, Cabserviceproject, Sendercomponentdatasharinginservice, Receivercomponentdatasharinginservice, RxJsExample, RxJsExampleTwo, Rxjsapicomponentprojectexample, TemplateFormExample, ReactiveFormExample, EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularprojects');

  name="My name is IT Preneur!!!!!!!"
}
