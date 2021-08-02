import { HttpClient, HttpClientModule } from "@angular/common/http";
import { inject, TestBed } from "@angular/core/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { IonicModule } from "@ionic/angular";

import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

import { DatabaseService } from "./database.service";

describe("DatabaseService", () => {
  let service: DatabaseService;
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: "bar" }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve(true)),
      }),
    }),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        // AngularFireModule.initializeApp(environment.firebaseConfig),
        // AngularFireAuthModule,
        // AngularFireModule,
        // AngularFirestoreModule,
        // HttpClientModule
      ],
      providers: [
        DatabaseService,
        {
          provide: AngularFirestore,
          // AngularFireAuth,
          HttpClient,
          useValue: FirestoreStub,
        },
      ],
    });
    service = TestBed.inject(DatabaseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should be name type string", () => {
    let users$ = service.getAllData("users");
    users$.subscribe((user) => {
      expect(user[0].name).toBeDefined();
    });
  });
});
