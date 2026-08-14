package com.example.ex04;

public class Student {
    private int id;
    private String name;
    private int age;
    private String email;
    private  String created_at;

    private int getId() {
        return id;
    }

    private String getName() {
        return name;
    }

    public Student(int id, String name, int age, String email, String created_at) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.created_at = created_at;
    }
}
