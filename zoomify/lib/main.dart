import 'package:flutter/material.dart';
import 'package:zoomify/pages/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  final String title = "Zoomify";
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: title,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(visualDensity: VisualDensity.standard),
      home: Home(title: title),
    );
  }
}
