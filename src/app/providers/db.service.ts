import { Injectable } from '@angular/core';

declare var window: any;

@Injectable()
export class DbService {
  connection: any;

  constructor() {
    this.connect();
  }

  connect() {
    if (this.connection)
      return this.connection;

    this.connection = window.openDatabase('covid', '1.0', 'Offline document storage', 5 * 1024 * 1024);

    this.execute("SELECT * FROM usuarios", []).then(function (res) {
    }).catch(() => this.create());
  }

  create() {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql(`
          CREATE TABLE usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT NOT NULL,
            endereco TEXT NOT NULL,
            email TEXT NOT NULL,
            telefone TEXT NOT NULL,
            senha TEXT NOT NULL
          )
        `, []
          , function (tx, result) {
            resolve(result);
          }, function (tx, error) {
            reject(error);
          });
      });
    });
  }

  execute(query, binding) {
    return new Promise((resolve, reject) => {
      this.connection.transaction(function (tx) {
        tx.executeSql(query, binding, function (_, result) {
          resolve(result);
        }, function (_, error) {
          reject(error);
        });
      });
    });
  }
}
