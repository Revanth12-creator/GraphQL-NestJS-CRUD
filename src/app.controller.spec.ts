import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;



  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});


// import 'package:flutter/material.dart';

// import 'package:graphql_flutter/graphql_flutter.dart';

// import 'package:shelf_cors_headers/shelf_cors_headers.dart';

// var user = """
//  query {
//   user(id:"a47f475b-6f36-4e52-9ccc-22ceff1f6e61"){
//     email
//   }   
// }
//   """;
// void main() {
//   final headers = <String, String>{
//     ACCESS_CONTROL_ALLOW_ORIGIN: 'http://localhost:5000/graphql',
//     'Content-Type': 'application/json;charset=utf-8',
//     ACCESS_CONTROL_ALLOW_ORIGIN: 'true'
//   };
//   final HttpLink httpLink =
//       HttpLink('http://localhost:5000/graphql', defaultHeaders: headers);
//   ValueNotifier<GraphQLClient> client = ValueNotifier(
//     GraphQLClient(
//       link: httpLink,
//       cache: GraphQLCache(store: InMemoryStore()),
//     ),
//   );
//   var app = GraphQLProvider(
//     client: client,
//     child: MyApp(),
//   );
//   runApp(app);
// }

// class MyApp extends StatelessWidget {
//   // This widget is the root of your application.
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Employee List'),
//           centerTitle: true,
//           backgroundColor: Colors.yellow,
//           leading: Icon(
//             Icons.add,
//           ),
//         ),
//         body: Container(
//           child: Center(
//               child: Query(
//                   options: QueryOptions(document: gql(user)),
//                   builder: (QueryResult result, {fetchMore, refetch}) {
//                     if (result.hasException) {
//                       return Text(result.exception.toString());
//                     }
//                     if (result.isLoading) {
//                       return Center(
//                         child: CircularProgressIndicator(),
//                       );
//                     }
//                     final userList = result.data;
//                     // return Text("dddd");
//                     return ListView.builder(
//                         itemCount: userList.length,
//                         itemBuilder: (context, index) {
//                           final data = userList[index];
//                           final List<String> entries = <String>[
//                             userList[index]
//                           ];
//                           print(userList);
//                           print(data['email']);
//                           return Text(data.toString());
//                         });
//                   })),
//         ),
//         floatingActionButton: FloatingActionButton(
//           child: Icon(Icons.add),
//           backgroundColor: Colors.green,
//           onPressed: () {
//             print("button Clicked.......");
//             Navigator.pushNamed(context, '/signUp');
//           },
//         ),
//       ),
//     );
//   }
// }
